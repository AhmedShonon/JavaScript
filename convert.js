//12 inch = 1feet
//inch to feet conversion
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

//
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + "ft " + inchRemaining + "inch";
  return result;
}

const shononHeight = inchToFeet(124);
// console.log(shononHeight);

const shononHeight2 = inchToFeet2(75);
// console.log(shononHeight2);

//Mile to K.M. Conversion
//1 mile = 1.60934 k.m.
function mileIntoKilo(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const distance = mileIntoKilo(6);
console.log(distance);
