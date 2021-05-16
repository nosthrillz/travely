import { validateDate } from "../js/validateDate";
import { convertDate } from "../js/convertDateFormat";

describe("Validate possible date inputs", () => {
  const empty = "";
  const emptyObj = convertDate(empty);
  const pastDate = "01/12/1990";
  const pastDateObj = convertDate(pastDate);
  const badSeparator = "01-12-2021";
  const badSeparatorObj = convertDate(badSeparator);
  const badDay = "41/12/2021";
  const badDayObj = convertDate(badDay);
  const badMonth = "12/21/2021";
  const badMonthObj = convertDate(badMonth);
  const badYear = "12/12/3021";
  const badYearObj = convertDate(badYear);

  const today = new Date();

  const msgEmpty = "Please input a date. For example: 25/12/2021.";
  const msgPast = "You can't create a trip with a date in the past.";
  const msgFormat =
    "Please input a valid date format: DD/MM/YYYY. For example: 25/12/2021.";

  test("Empty date", () => {
    expect(validateDate(empty, emptyObj, today)).toMatch(msgEmpty);
  });

  test("Past date", () => {
    expect(validateDate(pastDate, pastDateObj, today)).toMatch(msgPast);
  });

  test("Wrong format: separator", () => {
    expect(validateDate(badSeparator, badSeparatorObj, today)).toMatch(
      msgFormat
    );
  });

  test("Wrong format: wrong day 2", () => {
    expect(validateDate(badDay, badDayObj, today)).toMatch(msgFormat);
  });

  test("Wrong format: wrong month 1", () => {
    expect(validateDate(badMonth, badMonthObj, today)).toMatch(msgFormat);
  });

  test("Wrong format: wrong year", () => {
    expect(validateDate(badYear, badYearObj, today)).toMatch(msgFormat);
  });
});
