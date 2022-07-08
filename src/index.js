import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import barFirst from './modules/firstbar.js';
import secondBar from './modules/secondbar.js';
import clearButton from './modules/clearButton.js';
import getData from './modules/get-task.js';
import displayData from './modules/displaylist.js';
import clearCompleted from './modules/deleteComplete.js';
import deleteAll from './modules/deleteAll.js';

getData();
barFirst();
secondBar();
clearButton();
clearCompleted();
deleteAll();
displayData();
