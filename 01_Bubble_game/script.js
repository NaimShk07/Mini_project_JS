let pbot = document.querySelector('#p-bot');
var rn_hit = 0;
let score = 0;


function newHit() {
   let hit = document.querySelector('#hit');
   rn_hit = Math.floor(Math.random() * 10);
   hit.textContent = rn_hit;

}

function runTimer() {
   var timer = document.querySelector("#timer");
   var setTimer = setInterval(() => {
      if (timer.textContent > 0) {
         timer.textContent--;
      } else {
         clearInterval(setTimer);
         pbot.innerHTML = `<h1>Seedha Game over</h1>`;
      }
   }, 1000);
}

function in_score() {
   score += 10;
   document.querySelector("#score").textContent = score;
}

function makeBubble() {
   var clutter = '';

   for (let i = 0; i < 119; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rn}</div>`;

   }
   pbot.innerHTML = clutter;
}
function game() {
   pbot.addEventListener("click", function (delts) {
      var clickNum = Number(delts.target.textContent);
      if (clickNum === rn_hit) {
         newHit();
         makeBubble();
         in_score();

      }
   });
}

newHit();
runTimer();
makeBubble();
game()

