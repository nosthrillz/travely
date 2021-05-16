export const validateLocation = (location) => {
  let message = "";

  if (location == "") message = "Please input a location. For example: Zürich.";
  else {
    const regex = /[a-zA-Z]+/g;
    if (location.match(regex) == null)
      message = "Please input a valid location.";
  }

  return message;
};
