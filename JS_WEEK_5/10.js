const x = 1;

// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

//innerFunc 와 outerFunc는 서로 다른 스코프를 가지고 있다!! innerFunc가 '선언'이 밖에서 되었기 떄문에 스코프를 공유하지 않는다
//JS 엔진은 함수를 어디서 '호출'했는지가 아니라 어디에 '정의'했는지에 따라서 스코프를 결정한다
function innerFunc() {
  console.log(x); // 1
}

outerFunc();
