// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다
// map 함수 : 기존배열을 변경하지 않고 기존 배열을 가공해서 새로운 배열을 만든다
// map 함수는 return 문이 없으면 무조건 원래 함수 크기와 동일한 undefined를 반환한다.

var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

console.log(newArr);
