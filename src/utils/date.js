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
  return ` ${year} ${months[month]} ${day} `;
}
