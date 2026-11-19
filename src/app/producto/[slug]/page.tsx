import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COLORES, PRODUCTOS, formatoPrecio, productoPorSlug, segmentoPorId } from "@/data/catalogo";
import { ProductoArte } from "@/components/ProductoArte";
import { ProductoCard } from "@/components/ProductoCard";
import { Disponibilidad } from "@/components/Disponibilidad";
import { linkWhatsApp } from "@/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = productoPorSlug((await params).slug);
  return { title: p?.nombre ?? "Producto", description: p?.descripcion };
}

export default async function PaginaProducto({ params }: Props) {
  const p = productoPorSlug((await params).slug);
  if (!p) notFound();
  const seg = segmentoPorId(p.segmento)!;
  const relacionados = PRODUCTOS.filter((x) => x.segmento === p.segmento && x.slug !== p.slug).slice(0, 4);
  const mensaje = `Hola EyP! Me interesa "${p.nombre}" (${formatoPrecio(p.precio)}). ¿Me pasan más info?`;

  const ficha: [string, string][] = [
    ["Material", p.material],
    ["Medidas", p.medidas],
    ["Peso", `${p.pesoGramos} g`],
    ["Tiempo de impresión", `${p.horasImpresion} h aprox.`],
  ];

  return (
    <main className="mx-auto max-w-6xl px-4">
      <nav aria-label="Ruta" className="pt-6 text-sm text-tenue">
        <Link href="/" className="hover:text-texto">Inicio</Link> <span aria-hidden="true">/</span>{" "}
        <Link href={`/segmento/${seg.id}`} className="hover:text-texto">{seg.nombre}</Link> <span aria-hidden="true">/</span> {p.nombre}
      </nav>

      <section className="grid gap-8 py-8 md:grid-cols-2">
        <div className="self-start overflow-hidden rounded-2xl border border-linea">
          <ProductoArte producto={p} grande />
        </div>

        <div className="flex min-w-0 flex-col gap-5">
          <div>
            <span className="etiqueta" style={{ color: seg.color }}>{seg.nombre}</span>
            <h1 className="mt-1 font-display text-3xl font-bold leading-tight tracking-tight">{p.nombre}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-3xl font-bold tabular-nums">{formatoPrecio(p.precio)}</span>
            <Disponibilidad aPedido={p.aPedido} />
          </div>
          <p className="max-w-prose">{p.descripcion}</p>

          <div>
            <h2 className="etiqueta text-tenue">Colores disponibles</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {p.colores.map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-full border border-linea bg-superficie py-1 pl-1.5 pr-3 text-sm">
                  <span className="h-5 w-5 rounded-full border border-linea" style={{ background: COLORES[c] ?? "conic-gradient(#d99aa5,#c9a13b,#4f7a3a,#3e6a80,#d99aa5)" }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 rounded-xl border border-linea bg-superficie p-4 text-sm">
            {ficha.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-tenue">{k}</dt>
                <dd className="font-mono tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2">
            <a
              href={linkWhatsApp(mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-acento px-5 py-3 text-center font-semibold text-fondo hover:opacity-90"
            >
              Consultar por WhatsApp
            </a>
            <p className="text-sm text-tenue">
              {p.aPedido
                ? `Se imprime cuando lo pedís. Demora estimada: ${Math.max(2, Math.ceil(p.horasImpresion / 8) + 1)} días hábiles.`
                : "Hay unidades listas. Coordinamos la entrega o el envío por WhatsApp."}
            </p>
          </div>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="border-t border-linea py-10">
          <h2 className="mb-4 font-display text-xl font-semibold">Más de {seg.nombre}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {relacionados.map((r) => <ProductoCard key={r.slug} producto={r} />)}
          </div>
        </section>
      )}
    </main>
  );
}
