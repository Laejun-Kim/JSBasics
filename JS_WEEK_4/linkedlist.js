//링크드리스트
// 노드는 포인터를 가지고 있다. 맨 첫 노드가 헤드고 마지막 노드가 테일이다

//노드
class Node {
  //생성자
  constructor(data) {
    //data -> "흑연","자갈","밀가루"
    this.data = data;
    this.next = null;
  }
}

// class LinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//   }
// }

// const linkedList: LinkedList = new LinkedList("흑연");
// console.log(linkedList);

// class 니 생성자니 하는걸 모르니까 너무 어려워 흑흑... 더 못따라가겠어 흑흑...
