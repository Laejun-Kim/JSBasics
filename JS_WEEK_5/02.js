// 클래스라는 설계도를 만들어보자

class Person {
  //필수요소를 name과 age로 잡아보자. 그걸 constructor 에 인자로 준다
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //메서드 형태의 동사 표현
  sayHello() {
    console.log(this.name + " 님 안녕하세요");
  }
  printMyAge() {
    console.log(`내 나이는 ${this.age}살이에요`);
  }
}

// 설계도를 통해 인스턴스를 만들어보자
const person1 = new Person("홍길동", "30"); // 이름은 홍길동이고 나이는 30살인 사람 하나를 만들어줘 Person 설계도대로!
const person2 = new Person("mike", "24");
person1.sayHello();
person2.sayHello();
person2.printMyAge();
