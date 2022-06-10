class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtStart(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    newNode.prev = null;
    if (this.head != null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp);
      temp = temp.next;
    }
  }

  returnHead(tailNode) {
    let curr = tailNode;
    while (curr.prev != null) {
      curr = curr.prev;
    }
    return curr;
  }

  deleteAtStart() {
    let curr = this.head;
    let A = curr;
    let B = curr.next;
    B.prev = null;
    this.head = B;
    A = null;
  }
}

const li = new DoublyLinkedList();
li.insertAtStart(1);
li.insertAtStart(2);
li.display();
