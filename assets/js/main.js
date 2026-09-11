/* =========================================================
   COOL CAPS — main.js (versión estática, sin backend)

   Los productos y categorías vienen de data.js. El carrito
   se guarda en localStorage y el pedido se manda directo a
   WhatsApp con el detalle armado.
   ========================================================= */

const state = {
  activeCategory: 'todos',
  cart: JSON.parse(localStorage.getItem('coolcaps_cart') || '[]'),
  currentProduct: null,
  locationMapsUrl: null,
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const fmt = (n) => `${CONFIG.currency}${Number(n).toFixed(0)}`;

function discountPercent(p) {
  if (!p.oldPrice || p.oldPrice <= p.price) return null;
  return Math.round((1 - p.price / p.oldPrice) * 100);
}

/* ---------------------------------------------------------
   Init
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  bindGlobalEvents();
  syncWhatsappLinks();
  renderCategoryRail();
  renderProducts(getFilteredProducts());
  renderCartBadge();
});

function syncWhatsappLinks() {
  const url = `https://wa.me/${CONFIG.whatsappNumber}`;
  const header = $('#headerWhatsapp');
  const hero = $('#heroWhatsapp');
  if (header) header.href = url;
  if (hero) hero.href = url;
}

function bindGlobalEvents() {
  $('#cartBtn').addEventListener('click', openCart);
  $('#cartCloseBtn').addEventListener('click', closeCart);
  $('#cartDrawerOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCart();
  });

  $('#productModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeProductModal();
  });
  $('#modalCloseBtn').addEventListener('click', closeProductModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeProductModal(); closeCart(); }
  });

  $('#geoBtn').addEventListener('click', useMyLocation);
  $('#addressInput').addEventListener('input', () => { state.locationMapsUrl = null; });
  $('#checkoutForm').addEventListener('submit', handleCheckout);
  $('#applyPromoBtn').addEventListener('click', applyPromo);

  $('#qtyMinus').addEventListener('click', () => stepModalQty(-1));
  $('#qtyPlus').addEventListener('click', () => stepModalQty(1));

  $('#heroShopBtn').addEventListener('click', () => {
    $('#catalogo').scrollIntoView({ behavior: 'smooth' });
  });
}

/* ---------------------------------------------------------
   Categorías
--------------------------------------------------------- */
function renderCategoryRail() {
  const rail = $('#categoryScroll');
  const chips = [{ slug: 'todos', name: 'Todos' }, ...CATEGORIES];

  rail.innerHTML = chips.map(c => `
    <button class="chip ${c.slug === state.activeCategory ? 'active' : ''}" data-slug="${c.slug}">
      ${c.name}
    </button>
  `).join('');

  $$('.chip', rail).forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.slug;
      $$('.chip', rail).forEach(b => b.classList.toggle('active', b === btn));
      renderProducts(getFilteredProducts());
    });
  });
}

/* ---------------------------------------------------------
   Productos
--------------------------------------------------------- */
function getFilteredProducts() {
  if (state.activeCategory === 'todos') return PRODUCTS;
  return PRODUCTS.filter(p => p.categorySlug === state.activeCategory);
}

function renderProducts(products) {
  const grid = $('#productGrid');

  if (!products.length) {
    grid.innerHTML = '<div class="empty-state">Todavía no hay gorras en esta categoría.</div>';
    return;
  }

  grid.innerHTML = products.map(p => {
    const dp = discountPercent(p);
    return `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver ${p.name}">
      <div class="product-media">
        ${dp ? `<span class="discount-stamp">-${dp}%</span>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <p class="product-name">${p.name}</p>
        <div class="product-price-row">
          <span class="price">${fmt(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ''}
        </div>
      </div>
    </article>
  `;
  }).join('');

  $$('.product-card', grid).forEach(card => {
    const open = () => openProductModal(parseInt(card.dataset.id, 10));
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });
  });
}

/* ---------------------------------------------------------
   Modal de producto
--------------------------------------------------------- */
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  state.currentProduct = product;

  const overlay = $('#productModalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  renderProductModal(product);
}

const badgeIcon = `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l2.3 5.6 6 .5-4.6 3.9 1.5 5.9L10 13.8l-5.2 3.1 1.5-5.9L1.7 7.1l6-.5z"/></svg>`;

function renderProductModal(p) {
  const category = CATEGORIES.find(c => c.slug === p.categorySlug);
  const dp = discountPercent(p);

  $('#modalCategory').textContent = category ? category.name : '';
  $('#modalTitle').textContent = p.name;
  $('#modalDesc').textContent = p.description || '';
  $('#modalPrice').textContent = fmt(p.price);
  $('#modalPriceOld').textContent = p.oldPrice ? fmt(p.oldPrice) : '';
  $('#modalPriceOld').style.display = p.oldPrice ? 'inline' : 'none';
  $('#modalQty').textContent = '1';

  $('#modalBadges').innerHTML = p.badges.map(b => `<span class="badge">${badgeIcon} ${b}</span>`).join('');

  renderGallery(p.gallery && p.gallery.length ? p.gallery : [p.image]);

  $('#addToCartBtn').onclick = () => {
    addToCart(p, parseInt($('#modalQty').textContent, 10));
    showToast(`${p.name} agregada al carrito`);
  };
}

function renderGallery(images) {
  const main = $('#modalGalleryMain');
  const thumbs = $('#modalThumbs');

  const setActive = (i) => {
    main.innerHTML = `<img src="${images[i]}" alt="">`;
    $$('.modal-thumb', thumbs).forEach((t, idx) => t.classList.toggle('active', idx === i));
  };

  thumbs.innerHTML = images.map((img, i) => `
    <button class="modal-thumb ${i === 0 ? 'active' : ''}" data-i="${i}"><img src="${img}" alt=""></button>
  `).join('');
  thumbs.style.display = images.length > 1 ? 'flex' : 'none';

  $$('.modal-thumb', thumbs).forEach(btn => {
    btn.addEventListener('click', () => setActive(parseInt(btn.dataset.i, 10)));
  });

  setActive(0);
}

function closeProductModal() {
  $('#productModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function stepModalQty(delta) {
  const el = $('#modalQty');
  const next = Math.max(1, parseInt(el.textContent, 10) + delta);
  el.textContent = next;
}

/* ---------------------------------------------------------
   Carrito
--------------------------------------------------------- */
function saveCart() {
  localStorage.setItem('coolcaps_cart', JSON.stringify(state.cart));
  renderCartBadge();
}

function addToCart(product, quantity = 1) {
  const existing = state.cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.gallery && product.gallery.length ? product.gallery[0] : product.image,
      quantity,
    });
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(id); return; }
  saveCart();
  renderCart();
}

function cartSubtotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function renderCartBadge() {
  const count = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  const badge = $('#cartCount');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'grid' : 'none';
}

function renderCart() {
  const list = $('#cartItemList');

  if (!state.cart.length) {
    list.innerHTML = '<p class="cart-empty">Tu carrito está vacío. ¡Elige tu próxima gorra!</p>';
  } else {
    list.innerHTML = state.cart.map(i => `
      <div class="cart-item" data-id="${i.id}">
        <div class="cart-item-media"><img src="${i.image}" alt=""></div>
        <div class="cart-item-info">
          <p class="cart-item-name">${i.name}</p>
          <div class="cart-item-qty">
            <div class="stepper">
              <button type="button" data-action="dec">−</button>
              <span>${i.quantity}</span>
              <button type="button" data-action="inc">+</button>
            </div>
            <span class="cart-item-price">${fmt(i.price * i.quantity)}</span>
          </div>
          <button type="button" class="cart-item-remove" data-action="remove">Quitar</button>
        </div>
      </div>
    `).join('');

    $$('.cart-item', list).forEach(row => {
      const id = parseInt(row.dataset.id, 10);
      row.querySelector('[data-action="inc"]').addEventListener('click', () => updateCartQty(id, 1));
      row.querySelector('[data-action="dec"]').addEventListener('click', () => updateCartQty(id, -1));
      row.querySelector('[data-action="remove"]').addEventListener('click', () => removeFromCart(id));
    });
  }

  const subtotal = cartSubtotal();
  $('#cartSubtotal').textContent = fmt(subtotal);
  $('#cartTotal').textContent = fmt(subtotal);
  $('#checkoutBtn').disabled = state.cart.length === 0;
}

function openCart() {
  renderCart();
  $('#cartDrawerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('#cartDrawerOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------------------------------------------------------
   Ubicación (geolocalización)
--------------------------------------------------------- */
function useMyLocation() {
  if (!navigator.geolocation) {
    showToast('Tu navegador no soporta geolocalización');
    return;
  }
  const btn = $('#geoBtn');
  const originalText = btn.textContent;
  btn.textContent = 'Ubicando…';
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      state.locationMapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1&accept-language=es`
        );
        const data = await res.json();
        const formatted = formatAddress(data);
        $('#addressInput').value = formatted.text;

        if (!formatted.hasZona) {
          $('#addressDetailsInput').focus();
          showToast('No se detectó la zona automáticamente — agrégala en "detalles"');
        } else {
          showToast('Ubicación agregada — se incluirá un enlace de mapa en el pedido');
        }
      } catch (err) {
        $('#addressInput').value = 'Mi ubicación actual (ver mapa)';
        showToast('No se pudo leer la dirección — agrégala a mano si hace falta');
      }

      btn.textContent = originalText;
      btn.disabled = false;
    },
    () => {
      showToast('No se pudo obtener tu ubicación');
      btn.textContent = originalText;
      btn.disabled = false;
    }
  );
}

/**
 * Arma una dirección legible a partir de la respuesta de Nominatim,
 * buscando explícitamente un dato de "zona" (no siempre viene en el
 * mismo campo) porque es clave para direcciones en Guatemala.
 */
function formatAddress(data) {
  const a = data.address || {};
  const zonaRegex = /zona\s*\d+/i;

  const zonaField = Object.values(a).find(v => typeof v === 'string' && zonaRegex.test(v));

  const parts = [
    a.road,
    a.house_number,
    zonaField || a.suburb || a.city_district || a.neighbourhood,
    a.city || a.town || a.village,
    a.state,
    a.country,
  ].filter(Boolean);

  return {
    text: parts.length ? parts.join(', ') : (data.display_name || 'Mi ubicación actual (ver mapa)'),
    hasZona: Boolean(zonaField),
  };
}

/* ---------------------------------------------------------
   Código de promoción (demo simple en el cliente)
--------------------------------------------------------- */
function applyPromo() {
  const code = $('#promoInput').value.trim().toUpperCase();
  const hint = $('#promoHint');
  if (!code) { hint.textContent = ''; return; }

  if (code === CONFIG.promoCode) {
    hint.style.color = '#22c35e';
    hint.textContent = 'Código aplicado: 10% en tu próximo pedido (se confirma por WhatsApp).';
  } else {
    hint.style.color = 'var(--accent-pink)';
    hint.textContent = 'Código no válido.';
  }
}

/* ---------------------------------------------------------
   Checkout → arma el pedido y abre WhatsApp directamente
   (no hay servidor, así que no se guarda en ninguna base)
--------------------------------------------------------- */
function handleCheckout(e) {
  e.preventDefault();

  const address = $('#addressInput').value.trim();
  const details = $('#addressDetailsInput').value.trim();
  const name = $('#nameInput').value.trim();
  const phone = $('#phoneInput').value.trim();
  const promo = $('#promoInput').value.trim();

  if (!address) {
    showToast('Ingresa tu dirección de entrega');
    return;
  }
  if (!state.cart.length) {
    showToast('Tu carrito está vacío');
    return;
  }

  const payload = {
    name, phone, address, addressDetails: details,
    promoCode: promo || null,
    mapsUrl: state.locationMapsUrl,
    items: state.cart.map(i => ({ name: i.name, price: i.price, quantity: i.quantity })),
  };

  openWhatsAppOrder(payload);

  state.cart = [];
  state.locationMapsUrl = null;
  saveCart();
  renderCart();
  closeCart();
}

function openWhatsAppOrder(payload) {
  const total = payload.items.reduce((s, i) => s + i.price * i.quantity, 0);

  const lines = [
    `¡Hola! Quiero hacer un pedido en *${CONFIG.storeName}*`,
    '',
    ...payload.items.map(i => `• ${i.quantity}x ${i.name} — ${fmt(i.price * i.quantity)}`),
    '',
    `Total: ${fmt(total)}`,
    `Dirección: ${payload.address}${payload.addressDetails ? ' (' + payload.addressDetails + ')' : ''}`,
    payload.mapsUrl ? `📍 Ubicación en mapa: ${payload.mapsUrl}` : null,
    payload.name ? `Nombre: ${payload.name}` : null,
    payload.phone ? `Teléfono: ${payload.phone}` : null,
    payload.promoCode ? `Código promo: ${payload.promoCode}` : null,
    'Pago: contra entrega',
  ].filter(Boolean).join('\n');

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines)}`;
  window.open(url, '_blank');
}

/* ---------------------------------------------------------
   Toast
--------------------------------------------------------- */
let toastTimer = null;
function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
