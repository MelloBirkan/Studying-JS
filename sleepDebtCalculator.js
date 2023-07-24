function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 14;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 4;
      break;
  }
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday");

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 5;
}

function calculateSleepDebt() {
  if (getIdealSleepHours() === getActualSleepHours()) {
    console.log("You got the perfect amount of sleep.");
  } else if (getIdealSleepHours() > getActualSleepHours()) {
    console.log(
      `You should get some rest, ${getIdealSleepHours() - getActualSleepHours()
      } hours at least`
    );
  } else {
    console.log(
      `You slept more than the ideal, ${getActualSleepHours() - getIdealSleepHours()
      } Hours more`
    );
  }
}
calculateSleepDebt();
