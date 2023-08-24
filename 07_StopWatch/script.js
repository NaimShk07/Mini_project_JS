let hourElem = document.querySelector('.hour');
let minuteElem = document.querySelector('.minute');
let secondElem = document.querySelector('.second');

let hour = 0;
let minute = 0;
let second = 0;

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

startBtn.addEventListener('click', () => {
   var start = setInterval(() => {
      // second
      second++;
      if (second < 10) {
         secondElem.textContent = "0" + second;

      } else {
         secondElem.textContent = second;
      }
      // minute
      if (minute < 10) {
         minuteElem.textContent = "0" + minute;

      } else {
         minuteElem.textContent = minute;
      }
      // hours
      if (hour < 10) {
         hourElem.textContent = "0" + hour;

      } else {
         hourElem.textContent = hour;
      }

      if (second == 60) {
         minute++;
         minuteElem.textContent = "0" + minute;
         secondElem.textContent = '00';
         second = 0;
      }
      if (minute == 60) {
         hour++;
         hourElem.textContent = "0" + hour;
         minuteElem.textContent = '00';
         minute = 0;
      }

      stopBtn.addEventListener('click', () => {
         clearInterval(start);
      });
      resetBtn.addEventListener('click', () => {
         hour = 0;
         minute = 0;
         second = 0;
         hourElem.textContent = "00";
         minuteElem.textContent = "00";
         secondElem.textContent = "00";
         clearInterval(start);
      });
   }, 1000);

});