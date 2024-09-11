/* leap year = year / 4 is divisible ; */

function isLeafYear(year) {
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
const isLeap = isLeafYear(2028);
// console.log(isLeap);

function isLeafYearAccu(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 == 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const AccuLeafYear = isLeafYearAccu(2024);
console.log(AccuLeafYear);
