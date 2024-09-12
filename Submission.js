function calculateTax(income, expenses) {
  if (
    income < 0 ||
    typeof income !== "number" ||
    expenses < 0 ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }

  if (income < expenses) {
    return "Invalid Input";
  }

  let diff = income - expenses;
  let tax = diff * 0.2;
  return tax;
}

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const [username, domain] = email.split("@");
  return username + " " + "sent you an email from" + " " + domain;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  const { testScore, schoolGrade, isFFamily } = obj;

  if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let sum = 0;

  for (let i = 0; i < waitingTimes.length; i++) {
    if (typeof waitingTimes[i] !== "number") {
      return "Invalid Input";
    }
    sum += waitingTimes[i];
  }

  if (serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  }

  const averageTime = Math.round(sum / waitingTimes.length);
  const peopleLeft = serialNumber - 1 - waitingTimes.length;
  const waitingTime = peopleLeft * averageTime;

  return waitingTime;
}

console.log(calculateTax(10000, 3000)); // 1400
console.log(calculateTax(34000, 1753)); // 6449.4
console.log(calculateTax(5000, 1500)); // 700
console.log(calculateTax(7000, 7000)); // 0
console.log(calculateTax(-5000, 2000)); // Invalid Input
console.log(calculateTax(6000, -1500)); // Invalid Input

console.log(sendNotification("zihad@gmail.com")); // zihad sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com")); // farhan34 sent you an email from yahoo.com
console.log(sendNotification("nadim.naem5@outlook.com")); // nadim.naem5 sent you an email from outlook.com
console.log(sendNotification("fahim234.hotmail.com")); // Invalid Email
console.log(sendNotification("sadia8icloud.com")); // Invalid Email

console.log(checkDigitsInName("n9ayeem")); // true
console.log(checkDigitsInName("e1mu3")); // true
console.log(checkDigitsInName("Suman")); // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#")); // false
console.log(checkDigitsInName(["Raj"])); // "Invalid Input"
console.log(checkDigitsInName("Raj123")); // true

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello")); // Invalid Input
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);

console.log(waitingTime([3, 5, 7, 11, 6], 10)); // 24
console.log(waitingTime([13, 2], 6)); // 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // 0
console.log(waitingTime([6], 4)); // 12
console.log(waitingTime(7, 10)); // Invalid Input
console.log(waitingTime("[6,2]", 9)); // Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Invalid Input
