// 클래스 연습하기

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }
  printModelYear() {
    console.log(`${this.modelName}은 ${this.modelYear}년식 입니다.`);
  }
}

// const car1 = new Car("아반떼", 2023, "준중형", "2000만원");
// const car2 = new Car("911", 2021, "스포츠카", "2억원");
// const car3 = new Car("스타렉스", 2015, "승합차", "800만원");

// console.log(car3);
// car1.makeNoise();
// car2.printModelYear();

//[추가요구사항]
//1. 전기차 클래스 <- Car를 상속할것

class EV extends Car {
  //부모 constructor를 그대로 쓸수 없다(type이 e로 고정이니까). 그래서 여기선 constructor 를 써줘야하는데 type만 빼고(얜 고정이니까)
  constructor(modelName, modelYear, price, chargeTime) {
    // Car(부모 클래스)에게도 알려주기!
    super(modelName, modelYear, "e", price); //부모 constructor 를 그대로 가져오되, type만 e로 고정시켰다.
    this._chargeTime = chargeTime;
  }

  set chargeTime(value) {
    this._chargeTime = value;
  }
  get chargeTime() {
    return this._chargeTime;
  }
}

const eleCar1 = new EV("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log("-------------------------");
console.log(eleCar1.chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1.chargeTime);
