/**
 * Formata data YYYY-MM-DD para YYYY Month DD
 *
 * @param {String} pDate Data no formato YYYY-MM-DD
 * @returns {String} Data no formato YYYY Month DD
 */
export function formatDate(pDate) {
  const xDate = new Date(pDate);
  const month = xDate.getMonth();
  const year = xDate.getFullYear();
  const day = xDate.getUTCDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${year} ${months[month]} ${day}`;
}

export function isBefore(pDate1, pDate2) {
  return pDate1 < pDate2;
}
