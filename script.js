'use strict';

let secretNum = Math.trunc(Math.random() * 20)+1;
let score = 20;
let high = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessedNum = Number(document.querySelector('.guess').value);
  let newHigh;
  if (!guessedNum) {
    document.querySelector('.message').textContent = `🙁 Oops! That's not a number...`;
  } 
  else if(guessedNum!==secretNum)
  {
    if (score > 1) 
    {
      score--;
      document.querySelector('.message').textContent = (guessedNum>secretNum)?`😬 Guessed number is High`:`😬 Guessed number is Low`;
      document.querySelector('.score').textContent = score;
    } 
    else 
    {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `You lost`;
    }
  }
  
  else if (guessedNum === secretNum) 
  {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(
      '.message'
    ).textContent = `🥳 Yayy!! ${guessedNum} is correct!`;
    document.querySelector('.number').textContent = guessedNum;
    newHigh = Number(document.querySelector('.score').textContent);
    if (newHigh > high) 
    {
      high = newHigh;
      document.querySelector('.highscore').textContent = newHigh;
    }
  }
});

document.querySelector('.again').addEventListener('click', function()
{
  document.querySelector('.message').textContent ='Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 20)+1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ``;
});
