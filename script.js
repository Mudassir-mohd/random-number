const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;





function checkGuess() {






    const userGuess = document.getElementById('guess').value;
    const message = document.getElementById('message');
    attempts++;







    if (userGuess == randomNumber) {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        message.style.color = "green";








    } else if (userGuess < randomNumber) {
        message.textContent = '⬆️ Too low! Try again.';
        message.style.color = "red";










    } else {
        message.textContent = '⬇️ Too high! Try again.';
        message.style.color = "red";
    }
}