const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    console.log(`The user has chosen: ${userInput}`);
    return userInput;
  } else {
    console.log("Error!");
  }
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "paper";
      break;
    case 1:
      return "rock";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function determineWinner(computer, user) {
  if (computer === user) {
    return "Was a Tie";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "cissors" && computer === "rock") ||
    (user === "paper" && computer === "rock")
  ) {
    return "User has won";
  } else {
    return "Computer has won";
  }
}
function playGame() {
const userChoice = getUserChoice("paper");
const computerChoice = getComputerChoice();
console.log(`The computer has chosen: ${computerChoice}`);
console.log(determineWinner(computerChoice, userChoice));
}

playGame();
