const deleteCompleted = () => {
  const clearButton = document.querySelector('.clear-btn');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    const tasks = document.querySelectorAll('.finish');
    tasks.forEach((task) => {
      const removeButton = task.querySelector('.delete-btn');
      removeButton.click();
    });
  });
};

export default deleteCompleted;