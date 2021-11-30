'use strict';
/*
console.log   (document.querySelector('.message').textContent);
document.querySelector('.message').textContent=' correct number!';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContentS=20;

console.log(adocument.querySelector('.guess').value)

*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
const displayMessage=function (message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    ;
    // when no input
    if (!guess) {
        displayMessage('No number!')
       // document.querySelector('.message').textContent = ' No number !';
    }
    //when player wins
    else if (guess === secretNumber) {
       displayMessage(  ' Correct number!');
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number ').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //when guess is wrong

    else if (guess!==secretNumber){

        if (score > 1) 
         displayMessage(guess>secretNumber ?' Too height':'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
          displayMessage( ' You lost the game');
            document.querySelector('.score').textContent = 0;

        }
    });
    
// A reset functionality

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage( ' Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})


// A heigh score 


