function calculateTax(income, expenses) {
  if (
    income < 0 ||
    expenses < 0 ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }

  if (income < expenses) {
    return "Invalid Input";
  }

  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}

console.log(calculateTax(10000, 3000)); // 1400
console.log(calculateTax(34000, 1753)); // 6449.4
console.log(calculateTax(5000, 1500)); // 700
console.log(calculateTax(7000, 7000)); // 0
console.log(calculateTax(-5000, 2000)); // Invalid Input
console.log(calculateTax(6000, -1500)); // Invalid Input
