/* =========================================================
   COOL CAPS — data.js

   Aquí viven todos los productos y categorías de la tienda.
   No hace falta base de datos: para agregar, editar o borrar
   un producto solo edita este archivo y guarda.

   -----------------------------------------------------------
   CÓMO AGREGAR UN PRODUCTO NUEVO
   -----------------------------------------------------------
   1. Sube la(s) foto(s) del producto a assets/img/caps/
      (ej. assets/img/caps/mi-gorra-1.jpg) — usa siempre
      nombres de archivo en minúsculas.
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
   CÓMO AGREGAR UNA CATEGORÍA (MARCA) NUEVA
   -----------------------------------------------------------
   Agrega un bloque { slug: '...', name: '...' } a CATEGORIES.

   -----------------------------------------------------------
   NOTA SOBRE LAS FOTOS
   -----------------------------------------------------------
   Los nombres de archivo de fotos que enviaste (dandy001,
   Day001, Thirty001, Sayonara001, Rico001, Big001, Klan001,
   X001, Fino001, Mz001, etc.) se normalizaron todos a
   minúsculas aquí abajo. Sube tus fotos a assets/img/caps/
   usando esos mismos nombres en minúsculas y la extensión
   .jpg (si tus fotos son .png o .webp, solo cambia la
   extensión en cada ruta de este archivo).
   ========================================================= */

const CATEGORIES = [
  { slug: 'dandy',    name: 'Dandy' },
  { slug: 'day',      name: 'Counting Day' },
  { slug: 'thirty',   name: 'Thirty One' },
  { slug: 'baez',     name: 'Baez' },
  { slug: 'rico',     name: 'Rico Hats' },
  { slug: 'big',      name: 'Big Boss' },
  { slug: 'klan',     name: 'Klan Hats' },
  { slug: 'xcap',     name: 'X Cap' },
  { slug: 'fino',     name: 'Fino' },
  { slug: 'mz',       name: 'MZ Hats' },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Dandy Lost Hills',
    categorySlug: 'dandy',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/dandy001.jpg',
    gallery: [
      'assets/img/caps/dandy001.jpg',
      'assets/img/caps/dandy002.jpg',
      'assets/img/caps/dandy003.jpg',
      'assets/img/caps/dandy004.jpg',
    ],
    badges: [],
  },
  {
    id: 2,
    name: 'Counting Day',
    categorySlug: 'day',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/day001.jpg',
    gallery: [
      'assets/img/caps/day001.jpg',
      'assets/img/caps/day002.jpg',
      'assets/img/caps/day003.jpg',
      'assets/img/caps/day004.jpg',
    ],
    badges: [],
  },
  {
    id: 3,
    name: 'Thirty One Us The World',
    categorySlug: 'thirty',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/thirty001.jpg',
    gallery: [
      'assets/img/caps/thirty001.jpg',
      'assets/img/caps/thirty002.jpg',
      'assets/img/caps/thirty003.jpg',
      'assets/img/caps/thirty004.jpg',
    ],
    badges: [],
  },
  {
    id: 4,
    name: 'Gorra Baez Sayonara',
    categorySlug: 'baez',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/sayonara001.jpg',
    gallery: [
      'assets/img/caps/sayonara001.jpg',
      'assets/img/caps/sayonara002.jpg',
      'assets/img/caps/sayonara003.jpg',
      'assets/img/caps/sayonara004.jpg',
    ],
    badges: [],
  },
  {
    id: 5,
    name: 'Rico Hats No Dark No Stars',
    categorySlug: 'rico',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/rico001.jpg',
    gallery: [
      'assets/img/caps/rico001.jpg',
      'assets/img/caps/rico002.jpg',
      'assets/img/caps/rico003.jpg',
      'assets/img/caps/rico004.jpg',
    ],
    badges: [],
  },
  {
    id: 6,
    name: 'Big Boss San Diego',
    categorySlug: 'big',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/big001.jpg',
    gallery: [
      'assets/img/caps/big001.jpg',
      'assets/img/caps/big002.jpg',
      'assets/img/caps/big003.jpg',
      'assets/img/caps/big004.jpg',
    ],
    badges: [],
  },
  {
    id: 7,
    name: 'Rico Hats Chrome Black',
    categorySlug: 'rico',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/rico005.jpg',
    gallery: [
      'assets/img/caps/rico005.jpg',
      'assets/img/caps/rico006.jpg',
      'assets/img/caps/rico007.jpg',
      'assets/img/caps/rico008.jpg',
    ],
    badges: [],
  },
  {
    id: 8,
    name: 'Klan Hats SX',
    categorySlug: 'klan',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/klan001.jpg',
    gallery: [
      'assets/img/caps/klan001.jpg',
      'assets/img/caps/klan002.jpg',
      'assets/img/caps/klan003.jpg',
      'assets/img/caps/klan004.jpg',
    ],
    badges: [],
  },
  {
    id: 9,
    name: 'Klan Hats Los Angeles',
    categorySlug: 'klan',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/klan005.jpg',
    gallery: [
      'assets/img/caps/klan005.jpg',
      'assets/img/caps/klan006.jpg',
      'assets/img/caps/klan007.jpg',
      'assets/img/caps/klan008.jpg',
    ],
    badges: [],
  },
  {
    id: 10,
    name: 'Dandy Hats Sad Boyz',
    categorySlug: 'dandy',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/dandy005.jpg',
    gallery: [
      'assets/img/caps/dandy005.jpg',
      'assets/img/caps/dandy006.jpg',
      'assets/img/caps/dandy007.jpg',
      'assets/img/caps/dandy008.jpg',
    ],
    badges: [],
  },
  {
    id: 11,
    name: 'Xcap Viacrucis',
    categorySlug: 'xcap',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/x001.jpg',
    gallery: [
      'assets/img/caps/x001.jpg',
      'assets/img/caps/x002.jpg',
      'assets/img/caps/x003.jpg',
      'assets/img/caps/x004.jpg',
    ],
    badges: [],
  },
  {
    id: 12,
    name: 'Dandy Hats Sad Boyz',
    categorySlug: 'dandy',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/dandy009.jpg',
    gallery: [
      'assets/img/caps/dandy009.jpg',
      'assets/img/caps/dandy010.jpg',
      'assets/img/caps/dandy011.jpg',
      'assets/img/caps/dandy012.jpg',
    ],
    badges: [],
  },
  {
    id: 13,
    name: 'Big Boss Doble B',
    categorySlug: 'big',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/big005.jpg',
    gallery: [
      'assets/img/caps/big005.jpg',
      'assets/img/caps/big006.jpg',
      'assets/img/caps/big007.jpg',
      'assets/img/caps/big008.jpg',
    ],
    badges: [],
  },
  {
    id: 14,
    name: 'Fino Magic',
    categorySlug: 'fino',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/fino001.jpg',
    gallery: [
      'assets/img/caps/fino001.jpg',
      'assets/img/caps/fino002.jpg',
      'assets/img/caps/fino003.jpg',
      'assets/img/caps/fino004.jpg',
    ],
    badges: [],
  },
  {
    id: 15,
    name: 'MZ Hats Rico O Muerto',
    categorySlug: 'mz',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/mz001.jpg',
    gallery: [
      'assets/img/caps/mz001.jpg',
      'assets/img/caps/mz002.jpg',
      'assets/img/caps/mz003.jpg',
      'assets/img/caps/mz004.jpg',
    ],
    badges: [],
  },
  {
    id: 16,
    name: 'Thirty One LA',
    categorySlug: 'thirty',
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/thirty005.jpg',
    gallery: [
      'assets/img/caps/thirty005.jpg',
      'assets/img/caps/thirty006.jpg',
      'assets/img/caps/thirty007.jpg',
      'assets/img/caps/thirty008.jpg',
    ],
    badges: [],
  },
];