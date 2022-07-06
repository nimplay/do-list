const mainContrainer = document.querySelector('.container');
const barFirst = () => {
  const firstDiv = document.createElement('div');
  const firstP = document.createElement('p');
  const firstBtn = document.createElement('button');
  firstDiv.className = 'first-bar';
  firstP.setAttribute('id', 'first-bar-p');
  firstBtn.setAttribute('id', 'first-bar-btn');
  mainContrainer.appendChild(firstDiv);
  firstDiv.appendChild(firstP);
  firstDiv.appendChild(firstBtn);
  firstP.textContent = "Today's To Do";
};

export default barFirst;
