//getters 와 setters
//객체지향프로그래밍 언어 -> G,S 에 대한 기본적인 개념이 존재함
//클래스 -> 객체(인스턴스)
//프로퍼티 (constructor에서 정의)
// new Class(a,b,c)

//setter를 쓰면 외부에서 값이 들어왔을때 그걸 검증한 후에 세팅을 할 수 있다는 장점이 있다(숫자가 아닌걸 걸러낸다거나)

class Rectangle {
  constructor(height, width) {
    // underscore : private 이라는 의미
    this._height = height;
    this._width = width;
  }
  //width 를 위한 getter
  get width() {
    return this._width;
  }
  //width 를 위한 setter
  set width(value) {
    //검증1 : value가 음수이면 오류
    if (value <= 0) {
      console.log("[오류] 가로 길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 숫자를 입력하세요");
      return;
    }
    this._width = value;
  }
  //height 를 위한 getter
  get height() {
    return this._height;
  }
  //height 를 위한 setter
  set height(value) {
    if (value <= 0) {
      console.log("[오류] 세로 길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 숫자를 입력하세요");
      return;
    }
    this._height = value;
  }

  //신규 메서드 추가
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다.`);
  }
}

//instance 생성
const rect1 = new Rectangle(10, 20);
rect1.getArea();
console.log(rect1._height);
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);

//Maximum call stack size exceeded이 오류가 생긴다. 이유는 setter에서 무한 순환을 하기 때문.
//그래서 getters랑 setters에서 쓰는 약속이 있는데, this에 접근하는 property 이름 앞에는 항상 언더스코어를 붙인다는것.
// 언더스코어를 붙이고 나면 오류가 안남.언더스코어는 private 을 의미함. 허나 자세히 설명되진 않음....:(
