// Converts user input in String format DD/MM/YYYY to a Date format
export const convertDate = (date) => {
  const parts = date.split("/");

  if (parts.length == 1) {
    return false;
  } else {
    const day = parts[0];
    const month = parts[1] - 1;
    const year = parts[2];
    return new Date(year, month, day);
  }
};
