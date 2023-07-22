/*
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.
*/

let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let runnersAge = 17;

if (isEarly && runnersAge >= 18) {
  raceNumber += 1000;
}

if (runnersAge >= 18 && isEarly) {
  console.log(`You will race at 9:30 am.\nYour number is: ${raceNumber}`)
} else if (runnersAge >= 18 && !isEarly) {
  console.log(`You will race at 11:00 am\nYour number is: ${raceNumber}`)
} else {
  console.log(`You will race at 12:30 pm\nYour number is: ${raceNumber}`)
}