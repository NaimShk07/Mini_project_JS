function newGame() {
   let submit = document.querySelector('#submit');
   let guesses = document.querySelector('#guesses');
   let remainguess = document.querySelector('#remain');
   let result = document.querySelector('#result');
   let randomNum = Math.floor((Math.random() * 100) + 1);
   let guessVal = 10;
   let guess_arr = [];


   submit.addEventListener('click', function (e) {
      let input = document.querySelector('#input');
      if (guessVal > 0) {
         guessVal--;
         remainguess.textContent = guessVal;
         guess_arr.push(input.value);
         guesses.textContent = guess_arr;


      }
      if (guessVal == 0) {
         result.textContent = `Game over random number is ${randomNum}`;


      }


      if (input.value < randomNum) {
         result.textContent = "Your Number is too low";
      }
      else if (input.value > randomNum) {
         result.textContent = "Your Number is too high";

      }
      else if (input.value == randomNum) {
         result.textContent = `You have guessed it right with ${10 - guessVal} attempts`;
      }

      input.value = " ";
   });
   console.log(randomNum);
}
newGame();