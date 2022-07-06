import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import barFirst from './modules/firstbar.js';
import secondBar from './modules/secondbar.js';
import clearButton from './modules/clearButton.js';
import itemLi from './modules/item.js';

barFirst();
secondBar();
clearButton();

const item = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete to do list project',
    completed: false,
    index: 1,
  },
];

for (let i = 0; i < item.length; i += 1) {
  const task = item[i].description;
  itemLi(task);
}
