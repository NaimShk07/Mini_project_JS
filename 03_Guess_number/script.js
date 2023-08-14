let randomNum = Math.floor((Math.random() * 100) + 1);

let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let guesses = document.querySelector('#guesses');
let remainguess = document.querySelector('#remain');
let lowOrhigh = document.querySelector('#lowOrhigh');
let startOver = document.querySelector('#result');

let p = document.createElement('p');

let numguess = 1;
let prevGuess = [];

let playgame = true;

if (playgame) {
   submit.addEventListener('click', function (e) {
      e.preventDefault();
      let guess = parseInt(input.value);
      validateGuess(guess);

   });
}

function validateGuess(guess) {
   if (guess > 100) {
      alert('Please enter a valid number');
   } else if (guess < 1) {
      alert('Please enter a valid number');
   } else if (isNaN(guess)) {
      alert("Please enter a valid number");
   } else {
      prevGuess.push(guess);
      if (numguess >= 10) {
         displayGuess(guess);
         printMessage(`Game over, random number was ${randomNum}`);
         endGame();
      } else {
         displayGuess(guess);
         checkGuess(guess);
      }
   }
   // input.value = "";

}


function checkGuess(guess) {
   if (guess == randomNum) {
      printMessage(`You have guess it right`);
      endGame();
   } else if (guess < randomNum) {
      printMessage(`Number is too low`);
   } else if (guess > randomNum) {
      printMessage(`Number is too high`);
   }

}


function displayGuess(guess) {
   input.value = "";
   guesses.innerHTML = prevGuess;
   numguess++;
   remainguess.innerHTML = `${11 - numguess}`;

}

function printMessage(message) {
   lowOrhigh.innerHTML = message;

}

function endGame() {
   input.value = "";
   input.setAttribute('disabled', "");
   p.classList.add('button');
   p.classList.add('newGamebtn');
   p.innerHTML = "New game";
   startOver.appendChild(p);
   playgame = false;
   newGame();


}
function newGame() {
   let newGamebtn = document.querySelector('.newGamebtn');
   newGamebtn.addEventListener('click', function (e) {
      randomNum = Math.floor((Math.random() * 100) + 1);
      prevGuess = [];
      numguess = 1;
      guesses.innerHTML = '';
      remainguess.innerHTML = `${11 - numguess}`;
      input.removeAttribute("disabled");
      startOver.removeChild(p);

      playgame = true;

   });

}
console.log(randomNum);

