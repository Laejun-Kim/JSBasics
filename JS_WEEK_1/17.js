//조금 어려운 배열 메서드 forEach, map, filter, find

//forEach
// numbers.forEach(function (item) {
//     console.log("item입니다->" + item);
// });

//map
// let newNumbers = numbers.map(function (item) {
//     return item * 2;
// });
// console.log(newNumbers);

//filter
// let filteredNumbers = numbers.filter(function (item) {
//   return item !== 5;
// });
// console.log(filteredNumbers);

//find
let numbers = [4, 2, 3, 1, 5];
let result = numbers.find(function (item) {
  return item > 3;
});
console.log(result);
