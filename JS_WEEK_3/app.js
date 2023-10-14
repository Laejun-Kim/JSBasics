// console.log(userName);
// let userName = "Max";

// 브라우저는 var 와 마찬가지로 let 과 const 도 hoisting 해서 위로 끌어올리지만
//var 는 undefined로 initialize 하는것과 다르게 let 과 const는 initialize 하지 않는다
// 그래서 위 코드를 let 이나 const 로 실행해보면 Cannot access 'userName' before initialization
// 이 메시지가 뜨는데 var 는 undefined 를 출력한다
// 이게 왜 유용하냐면, var 와 let 을 사용할때 변수를 쓰기 전에 미리 declare 할것을 강제하기때문.
// 결과적으로 더 이해하기 쉬운 코드가 된다.

// var userName = "Max";
// var userName = "jun";

// console.log(userName);
//이것도 var 의 안좋은 기능중 하나. 변수 선언을 여러번 할 수 있는데 이런짓을 할 이유가 전혀 없다.
"use strict";
userName = "max";
console.log(userName);
//이것도 var의 안좋은 기능. var let const 없이 변수를 선언해도 JS가 알아서 보이지 않는 var를 추가한다
// 당연히 피해야할 행동이다.
