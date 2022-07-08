const deleteAll = () => {
  const clearButton = document.querySelector('.first-bar-btn');
  clearButton.addEventListener('click', () => {
    clearButton.classList.toggle('active');
    const tasks = document.querySelectorAll('.item');
    tasks.forEach((task) => {
      const removeButton = task.querySelector('.delete-btn');
      removeButton.click();
    });
  });
};

export default deleteAll;