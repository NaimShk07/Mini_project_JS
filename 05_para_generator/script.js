let input = document.querySelector('#input');
let box = document.querySelector('.box');

const generateWords = (n) => {
   let text = "";
   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


   for (let i = 0; i < n; ++i) {
      text += letters[(Math.random() * 25).toFixed(0)];


   }

   return text;
};

let numofword;
const generatePara = () => {
   numofword = Number(input.value);
   let sentence="";

   for (let i = 0; i < numofword; i++) {
      sentence += generateWords((Math.random() * 8).toFixed(0)) + "  ";


   }
   let para = document.createElement('p');

   para.textContent = sentence;
   para.setAttribute('class', 'para');
   box.append(para);
   input.value=""

   // input.value
};