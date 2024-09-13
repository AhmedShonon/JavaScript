// In this problem I need to create a function which can be able to get the max number from an Array
//Array must be a contain with a set of numbers
ArrayOfNum = [1, 3, 5, 6, 78];
let biggest = ArrayOfNum[0];

for (let i = 1; i < ArrayOfNum.length; i++) {
  if (ArrayOfNum[i] > biggest) {
    biggest = ArrayOfNum[i];
  }
}

console.log(biggest);

// Array = [1, 4, 5, 34, 76, 87, 100, 299];
// let Biggest = Array[0];
// for (let i = 1; i < Array.length; i++) {
//   if (Array[i] > Biggest) {
//     Biggest = Array[i];
//   }
// }

// console.log(Biggest);
// function largestNum() {}
