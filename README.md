# Arrow-Game
방향키를 이용한 게임

<p align="center">
  <img src="https://github.com/PinguLee/Arrow-Game/blob/main/img/main.png"/>
</p>


<추상>
1. 시작 버튼을 누를 시 임의의 방향키 4개 모양이 랜덤으로 4개 출력
2. 시작 버튼 비활성화 (재실행 방지)
3. 시작 후 완료까지 경과 시간 표시
4. 시작버튼 활성화
(어려움 버전 추가)

<구현>
- 시작 버튼 입력 받기 : addEventListener click 사용
- 방향키 4개 엘리먼트 생성 : createElement, append 를 통해 ul의 자식으로 li 태그 생성
- 랜덤 출력 : Random 메서드 사용 (1부터 4까지 : 최소값 최대값을 통해 그 사이 난수 생성)
- 경과 시간 표시 : setInterval 사용

<문제점 발생 / 개선 사항>
- HTML 표준에 의거하여 setTimeout() setInterval() 사용 시 지연시간 발생
ms 가장 근접한 값을 구현할 시 date()를 사용하여 변수에 저장하고 사용 하는 방법도 있음

https://www.figma.com/file/SFKNNcreG4CrkyfMgZ7BFd/Untitled?type=whiteboard&node-id=0%3A1&t=g6r3rZZ7EQaKM10K-1
https://www.figma.com/proto/iZDF9hgta1vyhrYctINREX/Untitled?type=design&node-id=1-2&t=Kn6fkBtG8mHYiUBx-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2
