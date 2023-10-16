const root = document.getElementById('root');
    const keyBox = document.getElementById('key-Box');
    const countLabel = document.getElementById('count');
    const startButton = document.getElementById('start');
    const test = document.getElementById('test');

    // 방향키 객체
    const keys = {
      1: '↑',
      2: '→',
      3: '↓',
      4: '←'
    };

    // 지난 시간
    let count = 0;
    let temp;

    // 난이도 조절
    if (test.textContent === "어려움 난이도 도전") {
      temp = 4;
    } else if (test.textContent === "쉬움 난이도 도전") {
      temp = 7;
    }

    // 엘리먼트 생성
    const events = () => {
      startButton.disabled = true;
      for (let i = 0; i < temp; i++) {
        let createKey = document.createElement('li');
        keyBox.append(createKey);
        createKey.setAttribute('class', 'key')
        createKey.textContent = keys[getRandomOneToFour()];
      }
    };

    // 1부터 4까지 랜덤 함수
    const getRandomOneToFour = () => {
      let min = Math.ceil(1);
      let max = Math.floor(4);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // 타이머
    let interval = setInterval(() => {
      count++;
    }, 0);
    clearInterval(interval);

    // 시작 버튼 입력
    startButton.addEventListener('click', () => {
      interval = setInterval(() => {
        ++count;
      }, 0);
      events();
    });

    // 방향키 버튼 입력
    window.addEventListener('keydown', (e) => {
      const compare = () => {
        keyBox.children[0].remove();
        if (keyBox.children[0] === undefined) {
          startButton.disabled = false;
          countLabel.textContent = `${count}`;
          clearInterval(interval);
          count = 0;
        }
      }

      // 엘리먼트가 있는지 확인
      if (keyBox.children[0] !== undefined) {
        // 입력 받은 값 비교
        switch (e.key) {
          // 키보드 방향키 ↑
          case 'ArrowUp':
            if (keyBox.children[0].textContent === keys[1]) {
              compare();
            }
            break;
          // 키보드 방향키 ↓
          case 'ArrowRight':
            if (keyBox.children[0].textContent === keys[2]) {
              compare();
            }
            break;
          // 키보드 방향키 →
          case 'ArrowDown':
            if (keyBox.children[0].textContent === keys[3]) {
              compare();
            }
            break;
          // 키보드 방향키 ←
          case 'ArrowLeft':
            if (keyBox.children[0].textContent === keys[4]) {
              compare();
            }
            break
        }
      }
    });