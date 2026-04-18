/**
 * Format a date string into a readable date ("17 août 2022")
 * @param {string} dateString
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateString));
}
