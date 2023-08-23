let titleInput = document.querySelector('#titleInput');
let desc = document.querySelector('#description');
let box = document.querySelector('.box');

let addbtn = document.querySelector('#addBtn');
let deleteBtn = document.querySelector('#deleteBtn');

let task = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];

showTask();


function showTask  () {
   task.forEach((value, index) => {
      let taskDiv = document.createElement('div');
      taskDiv.setAttribute('id', 'task');

      let div = document.createElement('div');
      taskDiv.append(div);

      let title = document.createElement('h3');
      title.textContent = value.title;
      let desc = document.createElement('h4');
      desc.textContent = value.desc;


      div.append(title);
      div.append(desc);

      let btn = document.createElement('button');
      btn.setAttribute('id', 'deleteBtn');
      btn.textContent = "-";


      btn.addEventListener('click', () => {
         removeTask();
         task.splice(index, 1);
         localStorage.setItem('task', JSON.stringify(task));//get all data from task array and display in local storage

         showTask();
      });
      taskDiv.append(btn);
      box.append(taskDiv);


   });
};

function removeTask() { //this code will remove all the task div in html(dom)
   task.forEach(() => {
      let div = document.querySelector('#task');
      div.remove();

   });

};

addbtn.addEventListener('click', () => {
   removeTask();
   task.push({
      title: titleInput.value,
      desc: desc.value
   });
   localStorage.setItem('task', JSON.stringify(task));//json.stringify so local storage can access its value
   showTask();
   titleInput.value = "";
   desc.value = "";


});