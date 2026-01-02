const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");
const resetBtn = document.querySelector(".reset-btn");
const message = document.querySelector(".message");

let randomNumber, attempts;

startGame();

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 5;
  message.textContent = "You have 5 attempts. Start guessing!";
  guessBtn.disabled = false;
  resetBtn.style.display = "none";
  guessInput.value = "";
}

guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  attempts--;

  if (guess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}.`;
    endGame();
  } else if (attempts > 0) {
    message.textContent = `${
      guess < randomNumber ? "Too low" : "Too high"
    }! ${attempts} attempts left.`;
  } else {
    message.textContent = `Game over! The number was ${randomNumber}.`;
    endGame();
  }
});

function endGame() {
  guessBtn.disabled = true;
  resetBtn.style.display = "inline-block";
}

resetBtn.addEventListener("click", startGame);
