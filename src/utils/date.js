export function formatDate(pDate) {
  const xDate = new Date(pDate);
  const month = xDate.getMonth();
  const year = xDate.getFullYear();
  const day = xDate.getUTCDate();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${day} de ${months[month]} de ${year}`;
}
