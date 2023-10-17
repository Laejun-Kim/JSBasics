//상속
//class -> 유산으로 내려주는 주요 기능!
// 부모 <-> 자식

// 동물 전체에 대한 클래스
class Animal {
  constructor(name) {
    this.name = name;
  }
  //메서드(짓다)
  speak() {
    console.log(`${this.name} says!`);
  }
}

const me = new Animal("LJ");
me.speak();

class Dog extends Animal {
  //부모에게서 constructor와 메서드를 전부 그대로 내려받음. 부모에게서 내려받은 메서드를 재정의 할 수 있음.
  //이렇게 부모 메서드를 재정의 하는걸 overriding 이라고 함.
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const cutePuppy = new Dog("didi");
cutePuppy.speak();
