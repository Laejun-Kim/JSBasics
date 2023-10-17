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

const car1 = new Car("아반떼", 2023, "준중형", "2000만원");
const car2 = new Car("911", 2021, "스포츠카", "2억원");
const car3 = new Car("스타렉스", 2015, "승합차", "800만원");

console.log(car3);
car1.makeNoise();
car2.printModelYear();
