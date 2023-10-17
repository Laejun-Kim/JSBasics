// 카운트 상태 변경 함수 #3
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저
  return function () {
    return ++num;
  };
})();

// 이전 상태값을 유지
console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3

//설명
// 1. 위 코드가 실행되면 , '즉시 실행 함수'가 호출 => 함수가 반환(inner) -> increase 에 할당
// 2. increase 변수에 할당된 함수는 자신이 정의된 위치의 상위 스코프인 즉시 실행 함수의 num을 참조한다.
// 3. 즉시 실행함수는 즉시 소멸된다(콜스택에서 사라진다고).
// 클로저를 씀으로서 num은 초기화가 되지 않으며 외부에서 접근할수 없는 은닉된 값이다.
