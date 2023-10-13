const date = new Date();
const root = document.getElementById('root');
const keyBox = document.getElementById('key-Box');
const countLabel = document.getElementById('count');
const startButton = document.getElementById('start');

const keys = {
  1: '↑',
  2: '→',
  3: '↓',
  4: '←'
};

let count = 0;

let ms = date.getMilliseconds();

const events = () => {
  startButton.disabled = true;
  for (let i = 0; i < 4; i++) {
    let createKey = document.createElement('li');
    keyBox.append(createKey);
    createKey.setAttribute('class', 'key')
    createKey.textContent = keys[getRandomOneToFour()];
  }
};

const getRandomOneToFour = () => {
  let min = Math.ceil(1);
  let max = Math.floor(4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let interval = setInterval(() => {
  count++;
}, ms);
clearInterval(interval);

startButton.addEventListener('click', () => {
  interval = setInterval(() => {
    console.log(++count);
  }, ms);
  events();
});

window.addEventListener('keydown', (e) => {
  const compare = () => {
    keyBox.children[0].remove();
    if (keyBox.children[0] === undefined) {
      startButton.disabled = false;
      countLabel.textContent = `${count}ms`;
      clearInterval(interval);
      count = 0;
    }
  }

  if (keyBox.children[0] !== undefined) {
    switch (e.key) {
      case 'ArrowUp':
        if (keyBox.children[0].textContent === keys[1]) {
          compare();
        }
        break;

      case 'ArrowRight':
        if (keyBox.children[0].textContent === keys[2]) {
          compare();
        }
        break;

      case 'ArrowDown':
        if (keyBox.children[0].textContent === keys[3]) {
          compare();
        }
        break;

      case 'ArrowLeft':
        if (keyBox.children[0].textContent === keys[4]) {
          compare();
        }
        break
    }
  }
});