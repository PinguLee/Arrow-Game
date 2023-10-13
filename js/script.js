const root = document.getElementById('root');
const keyBox = document.getElementById('key-Box');
const countLabel = document.getElementById('count');
const startButton = document.getElementById('start');

const keys = {
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
  startButton.disabled = true;
  for (let i = 0; i < 4; i++) {
    let createKey = document.createElement('li');
    keyBox.append(createKey);
    createKey.setAttribute("class", "key")
    createKey.textContent = keys[getRandomOneToFour()];
  }
});

window.addEventListener("keydown", (e) => {
  const compare = () => {
    keyBox.children[0].remove();
    if (keyBox.children[0] === undefined) {
      startButton.disabled = false;
    }
  }

  if (keyBox.children[0] !== undefined) {
    switch (e.key) {
      case "ArrowUp":
        if (keyBox.children[0].textContent === keys[1]) {
          compare();
        }
        break;

      case "ArrowRight":
        if (keyBox.children[0].textContent === keys[2]) {
          compare();
        }
        break;

      case "ArrowDown":
        if (keyBox.children[0].textContent === keys[3]) {
          compare();
        }
        break;

      case "ArrowLeft":
        if (keyBox.children[0].textContent === keys[4]) {
          kcompare();
        }
        break
    }
  }
});