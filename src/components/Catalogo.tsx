"use client";

import { useMemo, useState } from "react";
import { PRODUCTOS, SEGMENTOS, type Material, type SegmentoId } from "@/data/catalogo";
import { ProductoCard } from "./ProductoCard";

type Orden = "destacados" | "precio-asc" | "precio-desc" | "nombre";
const MATERIALES: Material[] = ["PLA", "PETG", "TPU", "PLA Silk", "PLA Madera"];

export function Catalogo({ segmentoFijo }: { segmentoFijo?: SegmentoId }) {
  const [q, setQ] = useState("");
  const [segmento, setSegmento] = useState<SegmentoId | "todos">(segmentoFijo ?? "todos");
  const [material, setMaterial] = useState<Material | "todos">("todos");
  const [soloListos, setSoloListos] = useState(false);
  const [orden, setOrden] = useState<Orden>("destacados");

  const base = segmentoFijo ? PRODUCTOS.filter((p) => p.segmento === segmentoFijo) : PRODUCTOS;
  const materialesUsados = MATERIALES.filter((m) => base.some((p) => p.material === m));

  const lista = useMemo(() => {
    const t = q.trim().toLowerCase();
    const r = base.filter(
      (p) =>
        (segmento === "todos" || p.segmento === segmento) &&
        (material === "todos" || p.material === material) &&
        (!soloListos || !p.aPedido) &&
        (!t || p.nombre.toLowerCase().includes(t) || p.descripcion.toLowerCase().includes(t)),
    );
    if (orden === "precio-asc") r.sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") r.sort((a, b) => b.precio - a.precio);
    if (orden === "nombre") r.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
    if (orden === "destacados") r.sort((a, b) => Number(!!b.destacado) - Number(!!a.destacado));
    return r;
  }, [base, q, segmento, material, soloListos, orden]);

  const control = "rounded-lg border border-linea bg-superficie px-3 py-2.5";

  return (
    <section aria-label="Productos">
      <div className="sticky top-[env(safe-area-inset-top,0px)] z-10 -mx-4 border-b border-linea bg-fondo/95 px-4 py-3 backdrop-blur sm:mx-0 sm:px-0">
        <div className="flex flex-wrap gap-2">
          <input
            id="buscar"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar macetas, lámparas, llaveros…"
            aria-label="Buscar productos"
            className={`${control} min-w-0 flex-[1_1_240px]`}
          />
          <select id="material" aria-label="Material" value={material} onChange={(e) => setMaterial(e.target.value as Material | "todos")} className={control}>
            <option value="todos">Todos los materiales</option>
            {materialesUsados.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select id="orden" aria-label="Ordenar" value={orden} onChange={(e) => setOrden(e.target.value as Orden)} className={control}>
            <option value="destacados">Destacados primero</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="nombre">Nombre A–Z</option>
          </select>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {!segmentoFijo && (
            <>
              <Chip activo={segmento === "todos"} onClick={() => setSegmento("todos")}>Todos <span className="opacity-70">{PRODUCTOS.length}</span></Chip>
              {SEGMENTOS.map((s) => (
                <Chip key={s.id} activo={segmento === s.id} onClick={() => setSegmento(s.id)} color={s.color}>
                  {s.nombre} <span className="opacity-70">{PRODUCTOS.filter((p) => p.segmento === s.id).length}</span>
                </Chip>
              ))}
            </>
          )}
          <label className="ml-auto flex cursor-pointer items-center gap-2 text-sm text-tenue">
            <input id="solo-listos" type="checkbox" checked={soloListos} onChange={(e) => setSoloListos(e.target.checked)} className="h-4 w-4 accent-[var(--acento)]" />
            Solo listos para entregar
          </label>
        </div>
      </div>

      <p className="py-4 text-sm text-tenue" aria-live="polite">
        {lista.length} {lista.length === 1 ? "producto" : "productos"}
      </p>

      {lista.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 pb-16">
          {lista.map((p) => <ProductoCard key={p.slug} producto={p} />)}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-linea px-6 py-16 text-center text-tenue">
          No encontramos productos con esos filtros. Probá con otra palabra o quitá algún filtro.
        </div>
      )}
    </section>
  );
}

function Chip({ activo, onClick, color, children }: { activo: boolean; onClick: () => void; color?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={activo}
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition ${
        activo ? "border-texto bg-texto text-fondo" : "border-linea bg-superficie hover:border-texto"
      }`}
    >
      {color && <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />}
      {children}
    </button>
  );
}
