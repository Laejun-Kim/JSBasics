Array.prototype.map123 = function (callback, thisArg) {
  //map 함수에서 return할 결과 배열
  var mappedArr = [];

  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

var newArr = [1, 2, 3].map123(function (number) {
  return number * 2;
});

console.log(newArr);

//화살표 함수는 그 상위것을 무조건
//렉시컬 : 선언시점을 기준으로 스코프를 결정하겠다
//this는 호출시점이 기준
//프로토타입 태어날때부터 js 가 부여해줌 메소드를 쓸수 있게 해주려고 ___proto___ 데이터 타입에 따라 기본적인 기능을 쓸수 있게 해줌
