import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEGMENTOS, segmentoPorId } from "@/data/catalogo";
import { Catalogo } from "@/components/Catalogo";
import { Icono } from "@/components/Icono";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return SEGMENTOS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = segmentoPorId((await params).id);
  return { title: s?.nombre ?? "Segmento", description: s?.bajada };
}

export default async function PaginaSegmento({ params }: Props) {
  const s = segmentoPorId((await params).id);
  if (!s) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4">
      <nav aria-label="Ruta" className="pt-6 text-sm text-tenue">
        <Link href="/" className="hover:text-texto">Inicio</Link> <span aria-hidden="true">/</span> {s.nombre}
      </nav>
      <section className="flex flex-wrap items-center gap-5 py-8">
        <div className="capas grid h-16 w-16 place-items-center rounded-xl" style={{ ["--seg" as string]: s.color }}>
          <Icono nombre={s.icono} className="h-8 w-8" />
        </div>
        <div className="min-w-0">
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{s.nombre}</h1>
          <p className="mt-1 max-w-prose text-tenue">{s.bajada}</p>
        </div>
      </section>
      <Catalogo segmentoFijo={s.id} />
    </main>
  );
}
