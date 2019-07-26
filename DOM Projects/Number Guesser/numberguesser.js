// GAME VALUES

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


// UI Elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn')
guessInput = document.querySelector('#guess-input')
message = document.querySelector('.message');


// Assign UI min and max 

minNum.textContent = min;
maxNum.textContent = max;


// Play again lisneres

game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }

})

// LISTEN FOR GUESS

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);


    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return;
    }

    // Check if won

    if (guess === winningNum) {
        // Game over Won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
        // Wrong Number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game Over Lost

            gameOver(false, `Game Over, You Lost. The correct Number Was ${winningNum}`);
        } else {
            // Change Border Color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Game Continues - Answer wrong
            setMessage(`${guess} is not Correct, ${guessesLeft} guesses left`)

        }

    }

});

// Set Message
function gameOver(won, msg) {
    let color;

    won === true ? color = 'green' : color = 'red';


    guessInput.disabled = true;
    // change border green
    guessInput.style.borderColor = color;
    // Set Text Color
    message.style.color = color;
    // Set Message
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


function getRandomNum(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min))
}




function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}