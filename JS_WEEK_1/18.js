//for,while => 반복문
// for (초기값; 조건식; 증감식) {

// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//배열과 for문은 짝꿍이다
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// }

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

//for~in 문
//객체의 속성을 출력하는 문법
// let person = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

//while 문
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 4;
// while (i < 100) {
//   if (i % 5 === 0) {
//     console.log(`${i}는 5의 배수야!`);
//   }
//   i++;
// }

//do~while 일단 코드를 한번 실행한 다음에 그다음에 while 조건을 확인한다
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//break continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // 5만 없애고 코드가 continue 된다
  }
  console.log(i);
}
