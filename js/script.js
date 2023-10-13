const root = document.getElementById('root');
const keyBox = document.getElementById('key-Box');
const countLabel = document.getElementById('count');
const startButton = document.getElementById('start');

const key = {
  1: "↑",
  2: "→",
  3: "↓",
  4: "←"
};

const getRandomOneToFour = () => {
  let min = Math.ceil(1);
  let max = Math.floor(4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startButton.addEventListener('click', () => {
  for (let i = 0; i < 4; i++) {
    let createKey = document.createElement('li');
    keyBox.append(createKey);
    createKey.textContent = key[getRandomOneToFour()];
  }
});