import Task from './task.js';
import itemLi from './item.js';
import getData from './get-task.js';

const toDoTasks = getData();
const mainContainer = document.querySelector('.container');
const secondBar = () => {
  const form = document.createElement('form');
  const inputText = document.createElement('input');
  const addBtn = document.createElement('button');
  form.className = 'first-bar';
  inputText.className = 'imput-text';
  addBtn.className = 'add-btn';
  form.setAttribute('action', 'add-item');
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Add to your list');
  addBtn.setAttribute('type', 'button');
  mainContainer.appendChild(form);
  form.appendChild(inputText);
  form.appendChild(addBtn);
  let lastIndex;
  let lastDato;
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputText.value) {
      if (toDoTasks.length === 0) {
        lastIndex = 0;
      } else {
        lastDato = toDoTasks[toDoTasks.length - 1];
        lastIndex = lastDato.index;
      }
      const task = new Task(inputText.value, lastIndex + 1);
      itemLi(task);
      toDoTasks.push(task);
      localStorage.setItem('Data', JSON.stringify(toDoTasks));
      inputText.value = '';
    } else {
      alert('please fill in all empty fields');
    }
  });
};

export default secondBar;