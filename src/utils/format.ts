export function formatTanggal(date: Date): string {
  return new Date(date).toLocaleDateString("id-ID");
}