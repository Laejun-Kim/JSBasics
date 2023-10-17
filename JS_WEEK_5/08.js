// static method(=정적 메소드)
// class => 객체를 다량으로 안전하고 정확하게 만들기 위해서 사용
// 근데 굳이 인스턴스화 시키지 않아도 되는(=객체를 만들지 않아도 되는) 변하지 않는 정적인 메소드들도 있고 이런건 스태틱메소드로 정의한다

class Calculator {
  static add(a, b) {
    console.log("[계산기] 더할게요");
    return a + b;
  }

  static subtract(a, b) {
    console.log("[계산기] 뺄게요");
    return a - b;
  }
}

console.log(Calculator.add(3, 5)); // 인스턴스화 시키지 않았지만 스태틱 이라는 키워드로 메소드를 바로 호출할수 있었다!
console.log(Calculator.subtract(3, 5));

// 이걸 어따쓸까? 쓸곳이야 무궁무진하지! 자주 쓰는 단순한 연산들을 얼마든지 함수처럼 만들어서 저장해놨다가
// 그걸 바로바로 불러서 쓸수 있다는거잖아. 심지어 어떤 클래스 이름 아래에 용도나 종류가 비슷한 것들을 묶어둘수도 있겠네
