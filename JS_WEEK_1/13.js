//조건부 실행
let x = 10;

// 그냥 if문
if (x > 0) {
  console.log("x는 양수입니다.");
}
// and조건(&&). 위의 if문과 완전히 같음
x > 0 && console.log("x는 양수입니다.");

//or 조건(||)
//삼항연산자와 단축평가
let y;
let z = y || 20; //지금 여기서 y는 undefined. y||20 은 y가 정의되어있지 않으면 20으로 세팅해줘 라는 의미임.
console.log(z);
