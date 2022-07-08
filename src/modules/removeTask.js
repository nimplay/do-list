import getData from './get-task.js';

const removeTask = (index) => {
  const li = document.getElementById(`task${index}`);
  const toDoTasks = getData();
  for (let i = 0; i < toDoTasks.length; i += 1) {
    if (toDoTasks[i].index === index) {
      toDoTasks.splice(i, 1);
      window.localStorage.clear();
      localStorage.setItem('Data', JSON.stringify(toDoTasks));
    }
  }
  li.remove();
  getData();
};

export default removeTask;