/* =========================================================
   COOL CAPS — data.js

   Aquí viven todos los productos y categorías de la tienda.
   No hace falta base de datos: para agregar, editar o borrar
   un producto solo edita este archivo y guarda.

   -----------------------------------------------------------
   CÓMO AGREGAR UN PRODUCTO NUEVO
   -----------------------------------------------------------
   1. Sube la(s) foto(s) del producto a assets/img/caps/
      (ej. assets/img/caps/mi-gorra-1.jpg)
   2. Copia un bloque { ... } de la lista PRODUCTS de abajo,
      pégalo antes del cierre "];" y cambia sus datos.
   3. "id" debe ser un número que no se repita con ningún otro
      producto.
   4. "categorySlug" debe coincidir con el "slug" de alguna
      categoría de la lista CATEGORIES.
   5. "gallery" es la lista de fotos del modal de detalle —
      puedes poner una sola foto o varias.
   6. Guarda el archivo y recarga la página (Ctrl+Shift+R).

   -----------------------------------------------------------
   CÓMO AGREGAR UNA CATEGORÍA NUEVA
   -----------------------------------------------------------
   Agrega un bloque { slug: '...', name: '...' } a CATEGORIES.
   ========================================================= */

const CATEGORIES = [
  { slug: 'dandy',      name: 'Dandy' },
  { slug: 'fino',       name: 'Fino' },
  { slug: 'rude',       name: 'Rude' },
  { slug: 'ajustables', name: 'Ajustables' },
  { slug: 'chuky',      name: 'Chuky Hats' },
  { slug: 'mz',         name: 'MZ Hats' },
  { slug: 'ab',         name: 'AB Hats' },
  { slug: 'xcap',       name: 'X Cap' },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Dandy Fuego Plata',
    categorySlug: 'dandy',
    price: 399,
    oldPrice: 530,
    description: 'Gorra negra bordado de llamas plateadas estilo tattoo, visera curva.',
    image: 'assets/img/caps/cap-01.svg',
    gallery: ['assets/img/caps/cap-01.svg', 'assets/img/caps/cap-01b.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 2,
    name: 'Dandy Corazón Rap',
    categorySlug: 'dandy',
    price: 399,
    oldPrice: 490,
    description: 'Gorra negra con corazón de pedrería y grabado craquelado en relieve.',
    image: 'assets/img/caps/cap-02.svg',
    gallery: ['assets/img/caps/cap-02.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 3,
    name: 'Star Ángel Azul',
    categorySlug: 'star',
    price: 399,
    oldPrice: 490,
    description: 'Gorra con letras graffiti azul eléctrico y estrellas doradas en visera.',
    image: 'assets/img/caps/cap-03.svg',
    gallery: ['assets/img/caps/cap-03.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 4,
    name: 'Star Clave Rosa',
    categorySlug: 'star',
    price: 399,
    oldPrice: 490,
    description: 'Gorra negra con estrella rosa neón y letras plateadas satinadas.',
    image: 'assets/img/caps/cap-04.svg',
    gallery: ['assets/img/caps/cap-04.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 5,
    name: 'Backpack Crema',
    categorySlug: 'lost-calf',
    price: 399,
    oldPrice: 490,
    description: 'Gorra negra con parche crema bordado y silueta de gato negro.',
    image: 'assets/img/caps/cap-05.svg',
    gallery: ['assets/img/caps/cap-05.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 6,
    name: 'Rude Plata 3D',
    categorySlug: 'rude',
    price: 399,
    oldPrice: 490,
    description: 'Bordado 3D plateado sobre negro, letras con textura satinada.',
    image: 'assets/img/caps/cap-06.svg',
    gallery: ['assets/img/caps/cap-06.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 7,
    name: 'Baggy Estrella Rota',
    categorySlug: 'baggy',
    price: 399,
    oldPrice: 490,
    description: 'Letras rosa neón con acabado craquelado y detalle de rayo.',
    image: 'assets/img/caps/cap-07.svg',
    gallery: ['assets/img/caps/cap-07.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 8,
    name: 'MZ Studs Plata',
    categorySlug: 'mz',
    price: 399,
    oldPrice: 490,
    description: 'Gorra tachonada con remaches metálicos plateados, estilo punk.',
    image: 'assets/img/caps/cap-08.svg',
    gallery: ['assets/img/caps/cap-08.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 9,
    name: 'X Cap Corona Hueso',
    categorySlug: 'xcap',
    price: 399,
    oldPrice: 490,
    description: 'Bordado tonal negro sobre negro con corona y craquelado hueso.',
    image: 'assets/img/caps/cap-09.svg',
    gallery: ['assets/img/caps/cap-09.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 10,
    name: 'Dandy Llamas Doble',
    categorySlug: 'dandy',
    price: 399,
    oldPrice: 530,
    description: 'Bordado de llamas envolventes en contorno blanco sobre negro total.',
    image: 'assets/img/caps/cap-10.svg',
    gallery: ['assets/img/caps/cap-10.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 11,
    name: 'Fino Minimal Cream',
    categorySlug: 'fino',
    price: 349,
    oldPrice: 420,
    description: 'Línea minimalista, logo pequeño bordado tono crema sobre negro.',
    image: 'assets/img/caps/cap-11.svg',
    gallery: ['assets/img/caps/cap-11.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
  {
    id: 12,
    name: 'Ajustable Classic',
    categorySlug: 'ajustables',
    price: 329,
    oldPrice: null,
    description: 'Ajustable con hebilla trasera, bordado clásico frontal.',
    image: 'assets/img/caps/cap-12.svg',
    gallery: ['assets/img/caps/cap-12.svg'],
    badges: ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'],
  },
];
