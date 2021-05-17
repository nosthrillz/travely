export const validateLocation = (location) => {
  let message = "";

  // if input is empty
  if (location == "") message = "Please input a location. For example: Zürich.";
  // RegEx match the required location format (no numbers)
  else {
    const regex = /[a-zA-Z]+/g;
    if (location.match(regex) == null)
      message = "Please input a valid location.";
  }

  return message;
};
