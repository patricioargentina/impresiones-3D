import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/inter";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/jetbrains-mono/400.css";
import { SEGMENTOS } from "@/data/catalogo";
import { NEGOCIO } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: NEGOCIO.nombre, template: `%s · ${NEGOCIO.nombre}` },
  description: "Piezas impresas en 3D para jardín, decoración, iluminación y hogar. Hechas a pedido en Argentina.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className="min-h-dvh antialiased">
        <header className="border-b border-linea">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold tracking-tight">EyP</span>
              <span className="text-sm text-tenue">Impresiones 3D</span>
            </Link>
            <nav aria-label="Segmentos" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {SEGMENTOS.map((s) => (
                <Link key={s.id} href={`/segmento/${s.id}`} className="text-tenue hover:text-texto">
                  {s.nombre}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-linea">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-8 text-sm text-tenue">
            <span>{NEGOCIO.nombre} · Piezas impresas capa por capa</span>
            <span>Catálogo en desarrollo · datos de ejemplo</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
