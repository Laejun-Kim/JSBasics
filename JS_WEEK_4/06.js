//obj
//2로서 속성
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(">>>test start");
    if (this === global) {
      console.log("this가 글로벌임. 원하지 않는 결과");
    } else {
      console.log(this, v, i);
    }
    console.log(">>>test end");
  },
};

// method 로서 호출
// obj.logValues(1, 2); // 이렇게 하면 문제 없이 this를 obj로 잘 잡음

// forEach, map ,filter 의 특성 : 콜백함수를 받았을때 인자로 배열의 요소를 첫번째 인자로, 그 인덱스를 두번째 인자로 던져준다
[4, 5, 6].forEach(obj.logValues); // obj.logValues 를 했기 때문에 메서드를 넣었다고 생각할수 있으나 그냥 function부터 시작하는 함수 자체를 넣은거임. 그래서 유감스럽게도 this가 글로벌로 잡힘
//콜백함수도 결국 함수다 라는 말의 연장선임.
