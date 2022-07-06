import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

function component() {
  const element = document.createElement('div');
  const i = document.createElement('i');

  // Add icon using font awesome
  i.classList.add('fa-solid');
  i.classList.add('fa-laptop');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.appendChild(i);
  return element;
}

document.body.appendChild(component());