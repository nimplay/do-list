import getData from './get-task.js';

const editData = (index, description = '', completed = false) => {
  if (description) {
    const toDoTasks = getData();
    const indexcont = index;
    const i = toDoTasks.findIndex((element) => element.index === indexcont);
    toDoTasks[i].completed = completed;
    toDoTasks[i].description = description;
    localStorage.setItem('Data', JSON.stringify(toDoTasks));
  }
};

export default editData;