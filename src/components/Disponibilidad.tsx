export function Disponibilidad({ aPedido }: { aPedido: boolean }) {
  return aPedido ? (
    <span className="whitespace-nowrap rounded-full bg-aviso-suave px-2.5 py-0.5 text-xs font-medium text-aviso">A pedido</span>
  ) : (
    <span className="whitespace-nowrap rounded-full bg-acento-suave px-2.5 py-0.5 text-xs font-medium text-acento">Listo para entregar</span>
  );
}
