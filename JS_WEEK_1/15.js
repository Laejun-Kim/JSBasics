//객체
// 하나의 변수에 여러개의 값을 넣을 수 있는게 장점
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

//1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

//2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

//3. 객체 메소드(Object.~~~~)
let keys = Object.keys(person);
console.log("keys=>", keys);

let values = Object.values(person);
console.log("values=>", values);

//3-3 entries : key 와 value 를 묶어서 배열로 만든 배열(2차원 배열)
let entries = Object.entries(person);
console.log("entries=>", entries);
//3-4. assign : 객체복사
let newPerson = {};
Object.assign(newPerson, person, { age: 31 });
console.log("newPerson=>", newPerson);

// //3-5. 객체 비교
// let person1 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// let person2 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };
// console.log(person1 === person2);
// console.log(JSON.stringify(person1) === JSON.stringify(person2));

//객체 병합
//...:spread operator
let person1 = {
  name: "홍길동",
  age: 30,
};

let person2 = {
  gender: "남자",
};

let perfectMan = { ...person1, ...person2 };
console.log("perfectMan=>", perfectMan);
