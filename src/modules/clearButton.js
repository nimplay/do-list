const mainContainer = document.querySelector('.container');
const clearButton = () => {
  const button = document.createElement('button');
  button.className = 'clear-btn';
  mainContainer.appendChild(button);
  button.textContent = 'Clear all complete';
};
export default clearButton;