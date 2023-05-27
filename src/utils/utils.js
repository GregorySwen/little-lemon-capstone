export const numberToWord = (num) => {
  switch (parseInt(num)) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 10:
      return "Ten";
    default:
      return parseInt(num).toString();
  }
};

export const isValidDate = (input) => {
  // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  return input instanceof Date && !isNaN(input);
};

export const offsetTimeZone = (input) => {
  const date = typeof input === "string" ? new Date(input) : input;
  return offsetDate(date);
};

// https://stackoverflow.com/a/29774197
export const getYMDString = (date) => {
  if (isValidDate(date)) {
    return offsetDate(date).toISOString().split("T")[0];
  }
  return offsetDate().toISOString().split("T")[0];
};

const offsetDate = (date) => {
  date = isValidDate(date) ? date : new Date();
  // Get timezone offset https://stackoverflow.com/questions/17545708/parse-date-without-timezone-javascript
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset);
};

export const getFieldClassName = (touched, errors) =>
  touched && errors ? "is-invalid" : "is-valid";
