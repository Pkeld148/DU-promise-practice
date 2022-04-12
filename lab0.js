const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userGuess = Number(prompt("Choose a number from 1 to 6"));
    console.log("user guess = ", userGuess);
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log("random number = ", randomNumber);

    if (userGuess > 6 || userGuess < 1) {
      reject(new Error("Please enter a number between 1 and 6!"));
    }

    if (userGuess === randomNumber) {
      resolve({ Points: 2, randomNumber });
    } else if (Math.abs(userGuess - randomNumber) === 1) {
      resolve({ Points: 1, randomNumber });
    } else {
      resolve({ Points: 0, randomNumber });
    }
  });
};

const continueGame = () => {
  const playAgain = confirm("Would you like to continue playing?");
  if (playAgain === true) {
    handleGuess();
  } else {
    alert("Thanks for playing!");
  }
};

const handleGuess = () => {
  enterNumber()
    .then((result) => {
      alert(
        `You scored ${result.Points}!\nThe random number was: ${result.randomNumber}`
      );
    })
    .catch((error) => {
      alert(error);
      // handleGuess();
    })
    .finally(() => {
      continueGame();
    });
};

handleGuess();
