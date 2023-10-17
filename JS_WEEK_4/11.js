//~new 연산자로 호출한 promise의 인자로 넘어가는 콜백은 바로 실행된다
// ~그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우
// resovle(또는 reject)둘중 하나가 실행되기 전까지는 다음 (then), 오류(catch)로 넘어가지 못한다
// 따라서 비동기 작업이 완료될 떄 비로소 resove, reject를 호출한다.

new Promise(function (resolve) {
  setTimeout(function () {
    var name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ", 아메리카노";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ", 카페모카";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ", 카페라떼";
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
