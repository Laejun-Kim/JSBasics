//(1) 제네레이터 함수 안에서 쓸 addCoffee 함수 선언!
var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};

// (2)제너레이터 함수 선언!
// yield 키워드로 순서 제어
var coffeeGenerator = function* () {
  //function 옆에 * 보이지? *붙은게 제네레이터 함수임. iterator 객체가 반환됨.
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();
