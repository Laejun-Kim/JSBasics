//무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
//setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행한다

var count = 0;
var cbFunc = () => {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);

//이게 마치 반복문처럼 실행된 이유를 모르겠네.. count가 0에서 시작했는데 뭐가 count를 하나씩 올린거지?
//if (++count >4) 이건 boolean 값을 반환하고 그걸 기반으로 다음 코드를 실행할지 말지 정하는거 아닌가...
// 그리고 clearInterval이 if 조건이 충족되었을때 실행할 코드였다면 왜 { } 안에 없지?

//내가 생각한 cbFunc 의 모습. 수업때 제시된 cbFunc의 모습과 비교해볼것 !!
function cbFunc() {
  console.log(count);
  count += 1;
  if (count > 4) {
    clearInterval(timer);
  }
}

//실행되는것 = 런타임 선언문에선 함수의 이름과 내용이 한꺼번에 호이스팅
//표현식은 값으로 나오기 때문에 변수에 담긴다
