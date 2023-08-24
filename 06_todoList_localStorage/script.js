let input = document.querySelector('#titleInput');
let desc = document.querySelector('#description');
let box = document.querySelector('.box');

let addBtn = document.querySelector('#addBtn');

let task = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
showTasks();

function showTasks() {
   task.forEach((value, index) => {
      let taskDiv = document.createElement('div');
      taskDiv.setAttribute('id', 'task');

      let div = document.createElement('div');
      taskDiv.append(div);

      let title = document.createElement('h3');
      let desc = document.createElement('h4');

      title.textContent = value.title;
      desc.textContent = value.desc;

      div.append(title);
      div.append(desc);

      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('id', 'deleteBtn');
      deleteBtn.textContent = "-";

      deleteBtn.addEventListener('click', () => {
         removeTask();
         task.splice(index, 1);
         localStorage.setItem('task', JSON.stringify(task));
         showTasks();

      });

      taskDiv.append(deleteBtn);
      box.append(taskDiv);

   });
}

const removeTask = () => {
   task.forEach(() => {
      let div = document.querySelector('#task');
      div.remove();
   });

};

addBtn.addEventListener('click', () => {
   removeTask();
   task.push({ // will push user input into array []
      title: input.value,
      desc: desc.value
   });
   localStorage.setItem('task', JSON.stringify(task));
   showTasks();
   input.value = "";
   desc.value = "";
});