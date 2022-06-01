class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  insertAtBeggining(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  display() {
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }
  insertAtPosition(data, pos) {
    if (pos == 0) {
      this.insertAtBeggining(data);
    } else {
      let tempNode = new Node(data);
      //   traverse the nodes to reach the pos(index)
      let current = this.head;
      let previous = null;
      let count = 0;
      while (count < pos) {
        previous = current;
        current = current.next;
        count++;
      }
      console.log(current);

      tempNode.next = current;
      previous.next = tempNode;
      this.length++;
    }
  }
  getElement(pos) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == pos) {
        console.log(current);
        break;
      }
      count++;
      current = current.next;
    }
  }
  getIntersectionPoint(head1, head2) {
    let curr1 = head1;
    let curr2 = head2;
    let length1 = findlength(head1);
    let length2 = findlength(head2);
    while (length1 > length2) {
      curr1 = curr1.next;

      length1--;
    }

    while (length2 > length1) {
      curr2 = curr2.next;
      length2--;
    }

    while (curr1 != curr2) {
      if (curr1.next == curr2.next) {
        return curr1.next;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    return head1;
  }
  findlength(head) {
    let count = 0;
    while (head != null) {
      count++;
      head = head.next;
    }
    return count;
  }
}

const ls = new SingleLinkedList();
ls.insertAtBeggining("piyush");
// ls.display();
ls.insertAtBeggining("ritu");

ls.insertAtBeggining("richa");
ls.getElement(2);

console.log(ls.head);
