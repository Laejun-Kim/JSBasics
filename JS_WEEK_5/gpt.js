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

class EV extends Car {
  #chargeTime;
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.#chargeTime = chargeTime; // #chargeTime을 private 필드로 설정
  }

  // chargeTime을 반환하는 get 메서드
  get chargeTime() {
    return this.#chargeTime;
  }
}

// 사용 예제
const myEV = new EV("Tesla Model 3", 2023, 50000, "4 hours");
console.log(myEV.modelName); // 출력: Tesla Model 3
console.log(myEV.chargeTime); // 출력: 4 hours
