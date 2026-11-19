export const NEGOCIO = {
  nombre: "EyP Impresiones 3D",
  /**
   * Número de WhatsApp con código de país y sin espacios ni "+", por ejemplo "5491123456789".
   * Mientras esté vacío, el botón "Consultar" abre WhatsApp para elegir el contacto.
   */
  whatsapp: "",
};

export function linkWhatsApp(mensaje: string) {
  const texto = encodeURIComponent(mensaje);
  return NEGOCIO.whatsapp ? `https://wa.me/${NEGOCIO.whatsapp}?text=${texto}` : `https://wa.me/?text=${texto}`;
}
