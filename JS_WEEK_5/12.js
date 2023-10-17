// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

console.log(increase());
// num = 100; // 치명적인 단점이 있어요.
console.log(increase());
console.log(increase());

// 보완 사항
//1. 카운트 상태가 increase 함수가 호출되기 전까지는 변경되지 말아야 한다
//2. 이를 위해서 count 상태는 increase 함수만이 변경할수 있어야 한다.
//3. 전역변수 num 이게 문제다. 이게 전역변수로 선언되어 있으면 안되겠지?
//4. 지역변수로 바꿔볼까?
