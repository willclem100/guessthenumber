let targetNumber = generateTargetNumber(); // Initialize target number by calling generateTargetNumber function

function generateTargetNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

document
  .getElementById("guess-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page on submit

    const userGuess = document.getElementById("guess").value;
    const message = document.getElementById("message");

    if (userGuess == targetNumber) {
      message.innerHTML = "Congratulations! You guessed the number!";
      targetNumber = generateTargetNumber(); // Generate a new target number when the user wins
    } else if (userGuess < targetNumber) {
      message.innerHTML = "Your guess is too low!";
    } else {
      message.innerHTML = "Your guess is too high!";
    }
  });
