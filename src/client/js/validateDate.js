import { convertDate } from "./convertDateFormat";

export const validateDate = (dateInput, dateObj, today) => {
  if (dateInput == "") return "Please input a date. For example: 25/12/2021.";
  else if (dateObj == false) {
    return "Please input a valid date format: DD/MM/YYYY. For example: 25/12/2021.";
  } else if (dateObj < today)
    return "You can't create a trip with a date in the past.";
  else {
    const regex = /[0-3][0-9]\/[0-1][0-9]\/202[1-9]/g;
    if (dateInput.match(regex) == null)
      return "Please input a valid date format: DD/MM/YYYY. For example: 25/12/2021.";
  }
  return "";
};
