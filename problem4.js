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
