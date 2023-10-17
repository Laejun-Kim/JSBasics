const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer 함수를 '실행'해서 innerFunc 에 담는다
// outer 함수의 return 부분을 innerFunc 에 담는단 소리지!
const innerFunc = outer();
innerFunc();
