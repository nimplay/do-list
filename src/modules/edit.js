import getData from './get-task.js';

const editData = (index, description = '', completed = false) => {
  if (description) {
    const toDoTasks = getData();
    toDoTasks[index - 1].description = description;
    toDoTasks[index - 1].completed = completed;
    localStorage.setItem('Data', JSON.stringify(toDoTasks));
  }
};

export default editData;