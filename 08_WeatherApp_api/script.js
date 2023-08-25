const temperatureField = document.querySelector('.weather1');
const cityField = document.querySelector('.weather2 p');
const dateField = document.querySelector('.weather2 span');
const emojiField = document.querySelector('.weather3 img');
const weatherField = document.querySelector('.weather3 span');

let input = document.querySelector('input');
let form = document.querySelector('form');

let target = 'delhi';




const fetchData = async (target) => {
   try {
      const url = `https://api.weatherapi.com/v1/current.json?key=ea1ebfe209394fd4b3c124842232508&q=${target}`;

      const response = await fetch(url);
      const data = await response.json();
      const { //advance destructuring
         current: {
            temp_c,
            condition: { text, icon } },
         location: { name, localtime }
      } = data;

      updateDom(temp_c, name, text, icon, localtime);

   } catch (error) {
      alert('Location not found');
   }


};
fetchData(target);

function updateDom(temp, city, condition, emoji, time) {
   temperatureField.innerHTML = temp + '°';
   cityField.innerHTML = city;
   dateField.innerHTML = time;
   weatherField.innerHTML = condition;
   emojiField.src = emoji;

}


form.addEventListener('submit', (e) => {
   e.preventDefault();
   target = input.value;
   console.log(target);
   fetchData(target);
   input.value=''

});