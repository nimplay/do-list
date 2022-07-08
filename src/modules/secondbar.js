import Task from './task.js';
import itemLi from './item.js';
import getData from './get-task.js';

const toDoTasks = getData();
const mainContainer = document.querySelector('.container');
const secondBar = () => {
  const form = document.createElement('form');
  const inputText = document.createElement('input');
  const addBtn = document.createElement('button');
  const error = document.createElement('small');
  form.className = 'first-bar';
  inputText.className = 'imput-text';
  addBtn.className = 'add-btn';
  error.className = 'error';
  form.setAttribute('action', 'add-item');
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Add to your list');
  addBtn.setAttribute('type', 'button');
  mainContainer.appendChild(form);
  form.appendChild(inputText);
  mainContainer.appendChild(error);
  form.appendChild(addBtn);

  error.textContent = '';
  let lastIndex;
  let lastDato;
  addBtn.addEventListener('click', () => {
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
      error.textContent = 'please fill in all empty fields';
      setTimeout(() => {
        error.textContent = '';
      }, 1000);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach((node) => node.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    }));
  });
};

export default secondBar;