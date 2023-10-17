//[콜백 함수 내부의 this 에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this 가 문맥에 맞는 객체를 바라보게 하고 싶다
// 콜백 함수 내부의 this 에 다른 값을 바인딩 하는 방법
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(obj1.name);
  },
};
setTimeout(obj1.func, 1000);
