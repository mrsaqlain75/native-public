/** Build a WhatsApp deep link with a prefilled message. */
export function waLink(number: string, text: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}
