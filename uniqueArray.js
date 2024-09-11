const repeatname = [
  "abul",
  "abul",
  "sabul",
  "sabul",
  "sabbir",
  "sporsho",
  "sojib",
  "aslam",
];
const numbers = [1, 1, 1, 1, 4, 34, 2, 34, 6, 78, 56, 90, 13];
function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
