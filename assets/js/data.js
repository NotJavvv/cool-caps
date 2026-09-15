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
   4. "categorySlugs" es una LISTA de una o más categorías —
      úsala con un solo valor si la gorra pertenece a una sola
      marca, o con dos+ valores si debe aparecer en varios
      apartados (ej. colaboraciones entre marcas).
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
   Todos los nombres de archivo se guardan en minúsculas.
   Sube tus fotos a assets/img/caps/ usando esos mismos
   nombres en minúsculas y la extensión .jpg (si tus fotos
   son .png o .webp, solo cambia la extensión en cada ruta
   de este archivo).
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
  { slug: 'kevin',    name: 'Kevin Hats' },
  { slug: 'shifu',    name: 'Shifu' },
  { slug: 'chuky',    name: 'Chucky Hats' },
  { slug: 'abz',      name: 'ABZ' },
];

const FULL_SET_BADGES = ['Full set', 'Envío gratis', 'Pagas al recibir', 'Incluye cubrepolvos', 'Caja', 'Cepillo', 'Chip NFC funcionando'];

const PRODUCTS = [
  {
    id: 1,
    name: 'Dandy Lost Hills',
    categorySlugs: ['dandy'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 2,
    name: 'Counting Day',
    categorySlugs: ['day'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 3,
    name: 'Thirty One Us The World',
    categorySlugs: ['thirty'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 4,
    name: 'Gorra Baez Sayonara',
    categorySlugs: ['baez'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 5,
    name: 'Rico Hats No Dark No Stars',
    categorySlugs: ['rico'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 6,
    name: 'Big Boss San Diego',
    categorySlugs: ['big'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 7,
    name: 'Rico Hats Chrome Black',
    categorySlugs: ['rico'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 8,
    name: 'Klan Hats SX',
    categorySlugs: ['klan'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 9,
    name: 'Klan Hats Los Angeles',
    categorySlugs: ['klan'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 10,
    name: 'Dandy Hats Sad Boyz',
    categorySlugs: ['dandy'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 11,
    name: 'Xcap Viacrucis',
    categorySlugs: ['xcap'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 12,
    name: 'Dandy Hats Sad Boyz',
    categorySlugs: ['dandy'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 13,
    name: 'Big Boss Doble B',
    categorySlugs: ['big'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 14,
    name: 'Fino Magic',
    categorySlugs: ['fino'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 15,
    name: 'MZ Hats Rico O Muerto',
    categorySlugs: ['mz'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 16,
    name: 'Thirty One LA',
    categorySlugs: ['thirty'],
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
    badges: FULL_SET_BADGES,
  },
  {
    id: 17,
    name: 'Kevin Hats x Big Boss',
    categorySlugs: ['big', 'kevin'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/kevin001.jpg',
    gallery: [
      'assets/img/caps/kevin001.jpg',
      'assets/img/caps/kevin002.jpg',
      'assets/img/caps/kevin003.jpg',
      'assets/img/caps/kevin004.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
  {
    id: 18,
    name: 'Shifu x Baez',
    categorySlugs: ['shifu', 'baez'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/shifu001.jpg',
    gallery: [
      'assets/img/caps/shifu001.jpg',
      'assets/img/caps/shifu002.jpg',
      'assets/img/caps/shifu003.jpg',
      'assets/img/caps/shifu004.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
  {
    id: 19,
    name: 'Chucky Hats El BOO V2 White',
    categorySlugs: ['chuky'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/chu001.jpg',
    gallery: [
      'assets/img/caps/chu001.jpg',
      'assets/img/caps/chu002.jpg',
      'assets/img/caps/chu003.jpg',
      'assets/img/caps/chu004.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
  {
    id: 20,
    name: 'Chucky Hats Mexicos Most Wanted',
    categorySlugs: ['chuky'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/chu005.jpg',
    gallery: [
      'assets/img/caps/chu005.jpg',
      'assets/img/caps/chu006.jpg',
      'assets/img/caps/chu007.jpg',
      'assets/img/caps/chu009.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
  {
    id: 21,
    name: 'Big Boss San Diego beige',
    categorySlugs: ['big'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/big009.jpg',
    gallery: [
      'assets/img/caps/big009.jpg',
      'assets/img/caps/big010.jpg',
      'assets/img/caps/big011.jpg',
      'assets/img/caps/big012.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
  {
    id: 22,
    name: 'ABZ Total Black',
    categorySlugs: ['abz'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/abz001.jpg',
    gallery: [
      'assets/img/caps/abz001.jpg',
      'assets/img/caps/abz002.jpg',
      'assets/img/caps/abz003.jpg',
      'assets/img/caps/abz004.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
  {
    id: 23,
    name: 'Dandy Dandywood',
    categorySlugs: ['dandy'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/dandy013.jpg',
    gallery: [
      'assets/img/caps/dandy013.jpg',
      'assets/img/caps/dandy014.jpg',
      'assets/img/caps/dandy015.jpg',
      'assets/img/caps/dandy016.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
    {
    id: 24,
    name: 'Big Boss x Klan Hats Sad Boss',
    categorySlugs: ['big', 'klan'],
    price: 600,
    oldPrice: null,
    description: '',
    image: 'assets/img/caps/big013.jpg',
    gallery: [
      'assets/img/caps/big013.jpg',
      'assets/img/caps/big014.jpg',
      'assets/img/caps/big015.jpg',
      'assets/img/caps/big016.jpg',
    ],
    badges: FULL_SET_BADGES,
  },
];