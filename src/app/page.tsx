import Link from "next/link";
import { PRODUCTOS, SEGMENTOS } from "@/data/catalogo";
import { Catalogo } from "@/components/Catalogo";
import { Icono } from "@/components/Icono";

export default function Inicio() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="grid gap-6 py-10 md:grid-cols-[1.2fr_1fr] md:items-end md:py-14">
        <div>
          <p className="etiqueta text-acento">Impresión 3D a pedido</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Piezas para tu jardín y tu casa, impresas capa por capa
          </h1>
        </div>
        <p className="max-w-prose text-tenue md:pb-1.5">
          Macetas, lámparas, objetos de decoración y regalos personalizados. Elegí el color y el material;
          lo que no está en stock lo imprimimos para vos.
        </p>
      </section>

      <section aria-label="Segmentos" className="grid grid-cols-2 gap-3 pb-10 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
        {SEGMENTOS.map((s) => {
          const n = PRODUCTOS.filter((p) => p.segmento === s.id).length;
          return (
            <Link
              key={s.id}
              href={`/segmento/${s.id}`}
              className="capas flex flex-col gap-3 rounded-xl p-4 transition hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ ["--seg" as string]: s.color }}
            >
              <Icono nombre={s.icono} className="h-8 w-8" />
              <div>
                <h2 className="font-display text-lg font-semibold text-texto">{s.nombre}</h2>
                <p className="text-sm text-tenue">{n} productos</p>
              </div>
            </Link>
          );
        })}
      </section>

      <Catalogo />
    </main>
  );
}
