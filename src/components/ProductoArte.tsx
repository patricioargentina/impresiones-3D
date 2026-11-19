import { segmentoPorId, type Producto } from "@/data/catalogo";
import { Icono } from "./Icono";

/**
 * Imagen provisoria del producto: fondo con líneas de capa (como una pieza impresa) e ícono.
 * Cuando haya fotos reales, se reemplaza por <Image>.
 */
export function ProductoArte({ producto, grande = false }: { producto: Producto; grande?: boolean }) {
  const color = segmentoPorId(producto.segmento)?.color ?? "#888";
  return (
    <div
      className="capas relative grid aspect-[4/3] w-full max-w-full place-items-center overflow-hidden"
      style={{ ["--seg" as string]: color }}
    >
      <Icono nombre={producto.icono} className={grande ? "h-28 w-28" : "h-16 w-16"} strokeWidth={grande ? 1.2 : 1.5} />
    </div>
  );
}
