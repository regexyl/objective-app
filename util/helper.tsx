/**
 * @param {string} dateString Date in the format 'DD/MM/YYYY'
 */
export const convertStringToDate = (dateString: string) => {
  const year = parseInt(dateString.slice(-4));
  const month = parseInt(dateString.slice(3, 5));
  const day = parseInt(dateString.slice(0, 2));
  return new Date(year, month - 1, day);
};
