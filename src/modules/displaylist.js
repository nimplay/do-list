import getData from './get-task.js';
import itemLi from './item.js';

const toDoTasks = getData();
const displayData = () => {
  for (let i = 0; i < toDoTasks.length; i += 1) {
    const task = toDoTasks[i];
    itemLi(task);
  }
};

export default displayData;
