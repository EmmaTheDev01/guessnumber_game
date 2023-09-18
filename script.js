'use strict';
//Declaration of variables.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // If there is no input, display the following message
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // Display correct number message
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#00a652';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //If the guess number is greater than secret number
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Loss message display
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Start guessing message
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// This Code is inspired by Jonas Schmedtmann, an instructor of Udemy
