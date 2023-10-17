// 카운트 상태 변경 함수 #2
const increase = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

// 이전 상태값을 유지 못함
console.log(increase()); //1
console.log(increase()); //1
console.log(increase()); //1

//리뷰
//1.num 변수를 지역변수로 선언 -> 변경은 방지. num 변수는 increase 함수만 변경할수 있게 됨
//2. 하지만 increase가 호출될때마다 num이 초기화 되는것이 유감
