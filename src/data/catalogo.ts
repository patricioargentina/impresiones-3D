// Datos del catálogo. Por ahora viven en este archivo; más adelante pasarán a una base de datos.

export type SegmentoId = "jardineria" | "decoracion" | "iluminacion" | "hogar" | "personalizados";
export type Material = "PLA" | "PETG" | "TPU" | "PLA Silk" | "PLA Madera";

export type Segmento = {
  id: SegmentoId;
  nombre: string;
  bajada: string;
  /** Color de filamento que identifica al segmento */
  color: string;
  icono: string;
};

export type Producto = {
  slug: string;
  nombre: string;
  segmento: SegmentoId;
  precio: number;
  descripcion: string;
  material: Material;
  medidas: string;
  pesoGramos: number;
  horasImpresion: number;
  colores: string[];
  /** true = se imprime cuando lo pedís; false = hay unidades listas para entregar */
  aPedido: boolean;
  destacado?: boolean;
  icono: string;
};

export const SEGMENTOS: Segmento[] = [
  { id: "jardineria", nombre: "Jardinería", bajada: "Macetas, soportes y accesorios para plantas de interior y exterior.", color: "#4f7a3a", icono: "Sprout" },
  { id: "decoracion", nombre: "Decoración", bajada: "Jarrones, portavelas, cuadros y objetos para ambientar.", color: "#b5653c", icono: "Shapes" },
  { id: "iluminacion", nombre: "Iluminación", bajada: "Lámparas y pantallas con texturas que solo logra la impresión 3D.", color: "#c99a2e", icono: "Lamp" },
  { id: "hogar", nombre: "Hogar y organización", bajada: "Organizadores, ganchos y soluciones prácticas para cada ambiente.", color: "#3e6a80", icono: "Archive" },
  { id: "personalizados", nombre: "Personalizados", bajada: "Llaveros, carteles y regalos con nombre, logo o la forma que imagines.", color: "#7a4f8a", icono: "Gift" },
];

/** Colores de filamento disponibles y su muestra */
export const COLORES: Record<string, string> = {
  Blanco: "#f4f4f1",
  Negro: "#222222",
  Gris: "#8a8d8f",
  Terracota: "#b5653c",
  "Verde oliva": "#6b7a3a",
  "Verde bosque": "#2f5b3a",
  Arena: "#d8c7a3",
  "Azul petróleo": "#2e5f6e",
  Dorado: "#c9a13b",
  Cobre: "#b06a3b",
  Madera: "#a87b4f",
  Rosa: "#d99aa5",
  Lila: "#a58bc2",
};

export const PRODUCTOS: Producto[] = [
  // Jardinería
  { slug: "maceta-geometrica-low-poly", nombre: "Maceta geométrica low poly", segmento: "jardineria", precio: 9800, descripcion: "Facetas tipo low poly con plato de drenaje incluido. Ideal para suculentas y cactus.", material: "PETG", medidas: "12 × 12 × 11 cm", pesoGramos: 140, horasImpresion: 6, colores: ["Blanco", "Terracota", "Verde oliva", "Negro"], aPedido: false, destacado: true, icono: "Flower2" },
  { slug: "maceta-autorriego", nombre: "Maceta con autorriego", segmento: "jardineria", precio: 14500, descripcion: "Depósito inferior con mecha de algodón: la planta toma agua sola hasta por dos semanas.", material: "PETG", medidas: "Ø 14 × 15 cm · depósito 350 ml", pesoGramos: 210, horasImpresion: 9, colores: ["Blanco", "Gris", "Verde bosque"], aPedido: false, destacado: true, icono: "Droplets" },
  { slug: "maceta-colgante-espiral", nombre: "Maceta colgante espiral", segmento: "jardineria", precio: 11200, descripcion: "Textura en espiral con tres puntos de anclaje. Incluye cordón de yute de 80 cm.", material: "PLA", medidas: "Ø 13 × 10 cm", pesoGramos: 120, horasImpresion: 5, colores: ["Blanco", "Arena", "Terracota"], aPedido: true, icono: "Flower" },
  { slug: "etiquetas-huerta-x10", nombre: "Etiquetas para huerta x10", segmento: "jardineria", precio: 4500, descripcion: "Estacas con el nombre de cada planta en relieve. Elegí los textos al hacer el pedido.", material: "PETG", medidas: "15 × 2,5 cm c/u", pesoGramos: 45, horasImpresion: 2, colores: ["Blanco", "Verde bosque", "Negro"], aPedido: true, icono: "Tag" },
  { slug: "comedero-aves", nombre: "Comedero para aves", segmento: "jardineria", precio: 12900, descripcion: "Techo a dos aguas y bandeja con drenaje. Resiste sol y lluvia.", material: "PETG", medidas: "16 × 14 × 18 cm", pesoGramos: 230, horasImpresion: 11, colores: ["Verde oliva", "Madera", "Blanco"], aPedido: false, icono: "Bird" },
  { slug: "tutor-plantas-trepadoras", nombre: "Tutor para plantas trepadoras", segmento: "jardineria", precio: 6700, descripcion: "Enrejado modular que se encastra para crecer en altura. Pack de 3 módulos.", material: "PETG", medidas: "3 módulos de 20 × 12 cm", pesoGramos: 90, horasImpresion: 4, colores: ["Verde bosque", "Negro"], aPedido: false, icono: "Sprout" },

  // Decoración
  { slug: "jarron-ondas", nombre: "Jarrón Ondas", segmento: "decoracion", precio: 13800, descripcion: "Paredes onduladas en modo vaso, de una sola pasada. Para flores secas o como pieza sola.", material: "PLA Silk", medidas: "Ø 11 × 24 cm", pesoGramos: 160, horasImpresion: 7, colores: ["Dorado", "Cobre", "Blanco"], aPedido: false, destacado: true, icono: "Waves" },
  { slug: "portavelas-voronoi", nombre: "Portavelas Voronoi", segmento: "decoracion", precio: 7900, descripcion: "Patrón orgánico calado que proyecta sombras en la pared. Para velas tipo tealight o LED.", material: "PLA", medidas: "Ø 8 × 9 cm", pesoGramos: 55, horasImpresion: 4, colores: ["Blanco", "Negro", "Arena"], aPedido: false, icono: "Flame" },
  { slug: "cuadro-topografico", nombre: "Cuadro topográfico", segmento: "decoracion", precio: 24500, descripcion: "Relieve de curvas de nivel de la montaña o ciudad que elijas, en capas de colores.", material: "PLA", medidas: "30 × 30 × 2 cm", pesoGramos: 380, horasImpresion: 16, colores: ["Blanco", "Arena", "Azul petróleo", "Verde bosque"], aPedido: true, destacado: true, icono: "Mountain" },
  { slug: "escultura-busto-geometrico", nombre: "Busto geométrico", segmento: "decoracion", precio: 18600, descripcion: "Busto clásico en versión facetada. Pieza de estante o escritorio.", material: "PLA", medidas: "12 × 10 × 20 cm", pesoGramos: 260, horasImpresion: 13, colores: ["Blanco", "Negro", "Gris"], aPedido: true, icono: "Gem" },
  { slug: "reloj-pared-minimal", nombre: "Reloj de pared minimal", segmento: "decoracion", precio: 21900, descripcion: "Esfera calada con máquina silenciosa de barrido continuo. Pila AA no incluida.", material: "PLA", medidas: "Ø 30 cm", pesoGramos: 290, horasImpresion: 12, colores: ["Negro", "Blanco", "Madera"], aPedido: false, icono: "Clock" },

  // Iluminación
  { slug: "lampara-luna", nombre: "Lámpara Luna", segmento: "iluminacion", precio: 26900, descripcion: "Réplica de la superficie lunar con luz LED cálida y recarga USB-C.", material: "PLA", medidas: "Ø 15 cm", pesoGramos: 200, horasImpresion: 14, colores: ["Blanco"], aPedido: false, destacado: true, icono: "Moon" },
  { slug: "pantalla-colgante-espiral", nombre: "Pantalla colgante espiral", segmento: "iluminacion", precio: 32500, descripcion: "Pantalla paramétrica para portalámparas E27. Usar solo con lámparas LED.", material: "PLA Silk", medidas: "Ø 30 × 26 cm", pesoGramos: 340, horasImpresion: 18, colores: ["Blanco", "Dorado", "Cobre"], aPedido: true, icono: "Lightbulb" },
  { slug: "velador-litofania", nombre: "Velador litofanía", segmento: "iluminacion", precio: 29800, descripcion: "Tu foto aparece al encender la luz. Enviá la imagen al hacer el pedido.", material: "PLA", medidas: "Ø 10 × 16 cm", pesoGramos: 150, horasImpresion: 10, colores: ["Blanco"], aPedido: true, icono: "LampDesk" },
  { slug: "lampara-escritorio-articulada", nombre: "Lámpara de escritorio articulada", segmento: "iluminacion", precio: 38700, descripcion: "Brazo con dos articulaciones y cabezal LED regulable por USB.", material: "PETG", medidas: "Alto máx. 45 cm", pesoGramos: 420, horasImpresion: 20, colores: ["Negro", "Blanco", "Azul petróleo"], aPedido: true, icono: "Lamp" },

  // Hogar y organización
  { slug: "organizador-escritorio-modular", nombre: "Organizador de escritorio modular", segmento: "hogar", precio: 11500, descripcion: "Cuatro módulos hexagonales que se unen con imanes. Para lápices, clips y celular.", material: "PLA", medidas: "4 módulos de 8 × 8 × 10 cm", pesoGramos: 180, horasImpresion: 8, colores: ["Blanco", "Gris", "Madera", "Rosa"], aPedido: false, icono: "Archive" },
  { slug: "colgador-llaves-pared", nombre: "Colgador de llaves", segmento: "hogar", precio: 8400, descripcion: "Cinco ganchos y bandeja superior para cartas. Incluye tornillos y tarugos.", material: "PETG", medidas: "25 × 6 × 8 cm", pesoGramos: 110, horasImpresion: 5, colores: ["Negro", "Blanco", "Madera"], aPedido: false, icono: "Key" },
  { slug: "soporte-auriculares", nombre: "Soporte para auriculares", segmento: "hogar", precio: 9200, descripcion: "Base pesada y antideslizante con terminación TPU para no rayar la vincha.", material: "PLA", medidas: "12 × 12 × 26 cm", pesoGramos: 170, horasImpresion: 9, colores: ["Negro", "Gris", "Blanco"], aPedido: false, icono: "Headphones" },
  { slug: "posavasos-x4", nombre: "Posavasos x4 con base", segmento: "hogar", precio: 6900, descripcion: "Flexibles y lavables, con base apilable para guardarlos.", material: "TPU", medidas: "Ø 10 cm c/u", pesoGramos: 95, horasImpresion: 4, colores: ["Negro", "Terracota", "Verde oliva", "Lila"], aPedido: false, icono: "Coffee" },

  // Personalizados
  { slug: "llavero-nombre", nombre: "Llavero con nombre", segmento: "personalizados", precio: 3200, descripcion: "Nombre en relieve a dos colores. Hasta 10 letras.", material: "PLA", medidas: "6 × 2 cm aprox.", pesoGramos: 8, horasImpresion: 1, colores: ["Negro", "Blanco", "Rosa", "Lila", "Azul petróleo"], aPedido: true, icono: "KeyRound" },
  { slug: "cartel-casa-numero", nombre: "Cartel con número de casa", segmento: "personalizados", precio: 15800, descripcion: "Número y apellido en relieve para la entrada. Apto exterior.", material: "PETG", medidas: "30 × 12 cm", pesoGramos: 190, horasImpresion: 8, colores: ["Negro", "Blanco", "Gris"], aPedido: true, icono: "Home" },
  { slug: "cortante-galletitas-personalizado", nombre: "Cortante de galletitas a medida", segmento: "personalizados", precio: 5600, descripcion: "Con la forma o el logo que nos mandes. Filamento apto para contacto con alimentos.", material: "PETG", medidas: "Hasta 10 × 10 cm", pesoGramos: 20, horasImpresion: 2, colores: ["Blanco", "Rosa"], aPedido: true, icono: "Cookie" },
  { slug: "figura-mascota", nombre: "Figura de tu mascota", segmento: "personalizados", precio: 22000, descripcion: "Modelada a partir de fotos de tu mascota y pintada a mano.", material: "PLA", medidas: "Alto 10 cm", pesoGramos: 80, horasImpresion: 9, colores: ["Pintada a mano"], aPedido: true, destacado: true, icono: "PawPrint" },
];

export const segmentoPorId = (id: string) => SEGMENTOS.find((s) => s.id === id);
export const productoPorSlug = (slug: string) => PRODUCTOS.find((p) => p.slug === slug);
export const formatoPrecio = (n: number) => "$ " + n.toLocaleString("es-AR");
