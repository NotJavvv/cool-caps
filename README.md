# COOL CAPS — versión estática (HTML + CSS + JavaScript)

Misma tienda, mismo diseño, mismas funciones (catálogo, categorías,
ficha de producto, carrito, checkout por WhatsApp) — pero **sin PHP ni
MySQL**, para poder subirla gratis a Netlify.

## Estructura

```
coolcaps-static/
├── index.html              Toda la página (header, hero, catálogo, modal, carrito)
├── assets/
│   ├── css/style.css        Estilos — colores, tipografía, layout
│   ├── js/
│   │   ├── config.js         Nombre de la tienda, WhatsApp, moneda
│   │   ├── data.js           ← AQUÍ SE AGREGAN/EDITAN LOS PRODUCTOS
│   │   └── main.js           Lógica del sitio (no hace falta tocarlo)
│   └── img/
│       ├── logo.svg                    Logo pequeño del header
│       ├── hero-logo-placeholder.svg   ← REEMPLAZA ESTO por el logo real
│       └── caps/                       Fotos de ejemplo de las gorras
```

## 1. Subir a Netlify (2 minutos, sin cuenta de por medio)

1. Entra a **https://app.netlify.com/drop**
2. Arrastra la carpeta `coolcaps-static` completa a esa página.
3. Netlify la publica al instante y te da una URL tipo
   `https://algo-random.netlify.app`.
4. (Opcional) En **Site settings → Change site name** puedes ponerle
   un nombre más bonito a la URL, o conectar tu propio dominio.

También puedes conectar un repositorio de GitHub para que cada vez
que subas un cambio se actualice solo — pero para este proyecto,
arrastrar y soltar es más que suficiente.

## 2. Poner el logo del cliente

Reemplaza el archivo:

```
assets/img/hero-logo-placeholder.svg
```

por el logo real (puede ser `.png`, `.jpg` o `.svg`). Dos formas:

- **Más fácil:** nombra tu archivo nuevo exactamente
  `hero-logo-placeholder.svg` (o `.png`/`.jpg`) y reemplázalo en esa
  misma carpeta — no hay que tocar el HTML.
- **Alternativa:** sube tu logo con el nombre que quieras (ej.
  `logo-cliente.png`) y en `index.html` busca esta línea y cambia el
  `src`:

  ```html
  <img src="assets/img/hero-logo-placeholder.svg" alt="Logo de la tienda" class="hero-logo">
  ```

  por:

  ```html
  <img src="assets/img/logo-cliente.png" alt="Logo de la tienda" class="hero-logo">
  ```

El mismo logo pequeño del header (`assets/img/logo.svg`, arriba a la
izquierda) también se puede reemplazar de la misma forma.

## 3. Agregar o editar productos

Todo vive en `assets/js/data.js` — no hace falta servidor ni base de
datos. Cada producto es un bloque así:

```js
{
  id: 13,
  name: 'Mi Gorra Nueva',
  categorySlug: 'dandy',           // debe existir en CATEGORIES
  price: 399,
  oldPrice: 490,                    // pon null si no tiene descuento
  description: 'Descripción corta de la gorra.',
  image: 'assets/img/caps/mi-gorra.jpg',
  gallery: ['assets/img/caps/mi-gorra.jpg', 'assets/img/caps/mi-gorra-2.jpg'],
  badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
},
```

Pasos:

1. Sube la(s) foto(s) a `assets/img/caps/`.
2. Copia un bloque de producto existente en `data.js`, pégalo antes
   del `];` que cierra la lista, y cambia sus datos.
3. Usa un `id` que no se repita.
4. Guarda el archivo — si lo subiste a Netlify por drag & drop, vuelve
   a arrastrar la carpeta completa para que se actualice (o conecta un
   repositorio de GitHub para que sea automático).

Para agregar una categoría nueva, agrega un bloque a la lista
`CATEGORIES` al inicio del mismo archivo:

```js
{ slug: 'nueva-linea', name: 'Nueva Línea' },
```

## 4. Cambiar colores

Todo el color sale de `assets/css/style.css`, al inicio, en el bloque
`:root`:

```css
--bg:            #0E0E10;   /* fondo general */
--accent-pink:   #FF2E88;   /* color principal de acento */
--accent-blue:   #2E6BFF;   /* acento secundario */
```

Cambia el valor una vez y se actualiza en todo el sitio (botones,
sello de descuento, bordes activos, etc.).

## 5. Cambiar el número de WhatsApp / nombre de la tienda

Edita `assets/js/config.js`:

```js
const CONFIG = {
  storeName: 'COOL CAPS',
  whatsappNumber: '50255555555',   // tu número real, sin '+'
  ...
};
```

## Qué cambió respecto a la versión con PHP/MySQL

- El carrito y el pedido **ya no se guardan en una base de datos** —
  el botón "Pedir por WhatsApp" arma el mensaje directo en el
  navegador y abre WhatsApp. Si más adelante quieres guardar un
  historial de pedidos, se puede agregar con un servicio externo
  (Google Sheets, Airtable, o un backend aparte) sin perder este
  diseño.
- Los productos se editan en un archivo de texto (`data.js`) en vez
  de phpMyAdmin — más simple para un sitio sin presupuesto de
  servidor, aunque significa editar código en vez de una tabla.
