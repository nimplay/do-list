import editData from './edit.js';
import removeTask from './removeTask.js';

const mainUl = document.querySelector('.item-list');
const itemLi = (task) => {
  const itemli = document.createElement('li');
  const div = document.createElement('div');
  const checkbox = document.createElement('input');
  const textContent = document.createElement('input');
  const btn = document.createElement('button');
  itemli.className = 'item';
  div.className = 'line';
  checkbox.className = 'my-checkbox';
  textContent.className = 'imput-text';
  btn.className = 'delete-btn';
  itemli.setAttribute('id', `task${task.index}`);

  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('value', 1);
  checkbox.setAttribute('name', `check${task.index}`);
  checkbox.setAttribute('id', `check${task.index}`);
  checkbox.checked = task.completed;

  textContent.setAttribute('type', 'text');
  textContent.setAttribute('placeholder', '');
  textContent.setAttribute('name', `text${task.index}`);
  textContent.setAttribute('id', `text${task.index}`);
  textContent.value = task.description;

  mainUl.appendChild(itemli);
  itemli.appendChild(div);
  div.appendChild(checkbox);
  itemli.appendChild(textContent);
  itemli.appendChild(btn);
  textContent.value = task.description;

  const styleContent = () => {
    if (checkbox.checked) {
      textContent.style = 'text-decoration: line-through; background-color: palegreen';
      itemli.classList.add('finish');
    } else {
      textContent.style = 'text-decoration: none';
      itemli.classList.remove('finish');
    }
  };
  styleContent();

  checkbox.addEventListener('click', () => {
    editData(task.index, textContent.value, (task.completed = checkbox.checked));
    styleContent();
  });

  textContent.addEventListener('change', () => {
    editData(task.index, textContent.value, checkbox.checked);
    div.style.display = 'inherit';
  });

  btn.addEventListener('click', () => {
    removeTask(task.index);
  });
};
export default itemLi;
