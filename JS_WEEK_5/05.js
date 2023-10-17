// 클래스 연습하기

//추가 요구사항
//1. modelName, modelYear, type, price을 가져오는 메서드
//2.modelName, modelYear, type, price 세팅하는 메서드
//3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직까지

class Car {
  #modelName;
  #modelYear;
  #type;
  #price;
  constructor(modelName, modelYear, type, price) {
    this.#modelName = modelName;
    this.#modelYear = modelYear;
    this.#type = type;
    this.#price = price;
  }

  // get modelName() {
  //   return this.#modelName;
  // }
  //setters로 입력값에 대한 검증이 가능하게 한다
  set modelName(value) {
    //유효성검사
    if (value.length <= 0) {
      console.log("[오류] 모델명이 입력되지 않았습니다");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다");
      return;
    }
    this.#modelName = value;
  }
  get modelYear() {
    return this.#modelYear;
  }
  set modelYear(value) {
    if (value.length <= 4) {
      console.log("[오류] 연도가 네자리가 아닙니다.");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 연도가 문자형이 아닙니다");
      return;
    }
    this.#modelYear = value;
  }
  get type() {
    return this.#type;
  }
  set type(value) {
    if (value.length <= 0) {
      console.log("[오류] 타입이 입력되지 않았습니다");
      return;
    }
    //g(가솔린), d(디젤), e(전기차)
    else if (value !== "g" && value !== "d" && value !== "e") {
      console.log("[오류] 입력된 타입이 잘못되었습니다.");
      return;
    }
    this.#type = value;
  }
  get price() {
    return this.#price;
  }
  set price(value) {
    if (typeof value !== "number") {
      console.log("[오류] 가격으로 입력된 값이 숫자가 아닙니다");
      return;
    } else if (value < "1000000") {
      console.log("[오류] 가격은 100만원보다 작을 수 없습니다.");
      return;
    }
    this.#price = value;
  }

  makeNoise() {
    console.log(`${this.#modelName}: 빵!`);
  }
  printModelYear() {
    console.log(`${this.#modelName}은 ${this.#modelYear}년식 입니다.`);
  }
}

// const car1 = new Car("아반떼", 2023, "준중형", "2000만원");
// const car2 = new Car("911", 2021, "스포츠카", "2억원");
// const car3 = new Car("스타렉스", 2015, "승합차", "800만원");

// console.log(car3);
// car1.makeNoise();
// car2.printModelYear();
const car1 = new Car("Taycan", "2023", "EV", 5000);
//getter 예시
// console.log(car1.modelName);
//setter 예시
// car1.modelName = 1; // 내가 설정한 검증 로직이 잘 작동하는지 보기 위해 일부러 invalid 한 모델명을 넣어봄.
console.log(car1.#modelName);
console.log(car1.type); //getter 설정해둔거(44~46번줄) 주석처리해도 상관없는것 같은데 getter는 왜 존재하는가?
//왜 데이터의 복사본을 만들어서 줘야하는가? 일반 클래스로 어떤 인스턴스의 프로퍼티에 접근한다고 했을떄
//그 프로퍼티가 참조값이라면 주소가 변수에 할당되어있다. 주소가 할당이 되기 때문에.

//무조건 꼭 게터나 세터를 써야 하는건 아니다. 다만 게터를 쓰는게 편리하다 게터를 쓰는 라이브러리도 많고.

//cf)리액트에선 클래스 자체를 잘 안씀. 근데 typescript에선 또 쓴다고함.

//변수 선언할때 가급적 const 재할당 필요할때만 let
// underbar
//# 프라이빗 속성 : 인스턴스를 만들어서 직접 접근을 할 수가 없다. 게터를 써야 프라이빗 속성에 접근할 수 있따. user.name 이렇게 접근하려면 게터가 있어야 한다
//user.#name 이런 접근은 아예 처음부터 불가능하게 막는단 소리. 그래서 게터가 필요한것.
//위 예시에서 car1._type 에 접근이 가능했던 이유는(private이라고 했음에도 불구하고) _가 그냥 개발자들 사이에서 합의된 사항일뿐 실제 JS에 내장된 논리는 아니기때문이다
//이제는 # 이 있고 이게 존재함으로서 게터의 존재 이유도 생긴다 :)
