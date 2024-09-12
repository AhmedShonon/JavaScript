// function waitingTime(waitingTimes, serialNumber) {
//   if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
//     return "Invalid Input";
//   }

//   if (!waitingTimes.every((time) => typeof time === "number")) {
//     return "Invalid Input";
//   }

//   if (serialNumber <= waitingTimes.length) {
//     return "Invalid Input";
//   }

//   const sum = waitingTimes.reduce((acc, time) => acc + time, 0);
//   const averageTime = Math.round(sum / waitingTimes.length);
//   const peopleLeft = serialNumber - 1 - waitingTimes.length;
//   const waitingTime = peopleLeft * averageTime;

//   return waitingTime;
// }

// console.log(waitingTime([3, 5, 7, 11, 6], 10)); // 24
// console.log(waitingTime([13, 2], 6)); // 24
// console.log(waitingTime([13, 2, 6, 7, 10], 6)); // 0
// console.log(waitingTime([6], 4)); // 12
// console.log(waitingTime(7, 10)); // Invalid Input
// console.log(waitingTime("[6,2]", 9)); // Invalid Input
// console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Invalid Input
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
console.log(waitingTime([3, 5, 7, 11, 6], 10)); // 24
console.log(waitingTime([13, 2], 6)); // 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // 0
console.log(waitingTime([6], 4)); // 12
console.log(waitingTime(7, 10)); // Invalid Input
console.log(waitingTime("[6,2]", 9)); // Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Invalid Input
