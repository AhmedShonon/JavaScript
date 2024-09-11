function oddNumber(numbers) {
  const odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  //   console.log(odd);
  let sum = 0;
  for (const number of odd) {
    sum = sum + number;
  }
  const count = odd.length;
  console.log("Sum of odds Numbers: " + sum);
  console.log("Total No. of odds Numbers: " + count);
  const avg = sum / count;
  console.log("Average of Odd Numbers:" + avg);
}
const numbers = [12, 34, 56, 11, 13, 15, 17, 219];
const avg = oddNumber(numbers);
