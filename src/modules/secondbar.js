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
};

export default secondBar;