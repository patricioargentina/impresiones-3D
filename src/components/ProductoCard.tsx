import Link from "next/link";
import { COLORES, formatoPrecio, segmentoPorId, type Producto } from "@/data/catalogo";
import { ProductoArte } from "./ProductoArte";
import { Disponibilidad } from "./Disponibilidad";

export function ProductoCard({ producto }: { producto: Producto }) {
  const seg = segmentoPorId(producto.segmento);
  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-linea bg-superficie transition hover:-translate-y-0.5 hover:border-acento motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <ProductoArte producto={producto} />
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="etiqueta" style={{ color: seg?.color }}>{seg?.nombre}</span>
        <h3 className="font-semibold leading-snug">{producto.nombre}</h3>
        <div className="flex items-center gap-1.5" aria-label={`Colores: ${producto.colores.join(", ")}`}>
          {producto.colores.slice(0, 5).map((c) => (
            <span key={c} title={c} className="h-3.5 w-3.5 rounded-full border border-linea" style={{ background: COLORES[c] ?? "conic-gradient(#d99aa5,#c9a13b,#4f7a3a,#3e6a80,#d99aa5)" }} />
          ))}
          <span className="ml-1 font-mono text-xs text-tenue">{producto.material}</span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="font-display text-lg font-bold tabular-nums">{formatoPrecio(producto.precio)}</span>
          <Disponibilidad aPedido={producto.aPedido} />
        </div>
      </div>
    </Link>
  );
}
