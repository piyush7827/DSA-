class Node {
  constructor(data) {
    this.data = data;
    this.nextAddress = null;
  }
}

class Linkedlist {
  constructor() {
    this.root = null;
  }
  // how to add element in linkedlist
  addToLast(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode; // make this.root is first node in  linkedlist
    }
    // move temp to last untill nextaddress is null
    else {
      let temp = this.root;
      while (temp.nextAddress != null) {
        temp = temp.nextAddress;
      }
      temp.nextAddress = newNode;
    }
  }

  display() {
    let temp = this.root;
    while (temp != null) {
      console.log(temp.data + " --> ");
      temp = temp.nextAddress;
    }
  }

  addToFront(data) {
    let newNode = new Node(data);
    newNode.nextAddress = this.root;
    this.root = newNode;
  }

  removelast() {
    let temp = this.root;
    if (this.root == null) {
      return;
    } else if (this.root.nextAddress == null) {
      this.root = null;
      return;
    }

    while (temp.nextAddress.nextAddress != null) {
      temp = temp.nextAddress;
    }
    // temp is second last element
    temp.nextAddress = null;
  }

  getIthElement(i) {
    // i = which linkedlist to find
    let temp = this.root;
    for (let index = 0; index < i; index++) {
      temp = temp.nextAddress;
    }
    console.log(temp.data);
  }

  addToIthIndex(i, data) {
    if (i === 0) {
      this.addToFront(data);
      return;
    }

    let newNode = new Node(data);
    let temp = this.root;
    for (let index = 0; index < i - 1; index++) {
      temp = temp.nextAddress;
    }
    newNode.nextAddress = temp.nextAddress;
    temp.nextAddress = newNode;
  }

  reverse() {
    // prev,curr,next at initial stage
    let prev = null;
    let curr = this.root;
    let next = curr.nextAddress;

    while (next != null) {
      curr.nextAddress = prev;
      // change prev,curr,next
      prev = curr;
      curr = next;
      next = next.nextAddress;
    }
    curr.nextAddress = prev;
    this.root = curr;
  }
}

let linkedlist = new Linkedlist();
linkedlist.addToLast(10);
linkedlist.addToLast(20);
linkedlist.addToLast(30);
linkedlist.addToLast(40);
linkedlist.addToLast(50);
linkedlist.addToLast(60);
// linkedlist.display();
// linkedlist.getIthElement(2);  // ans = 30
// linkedlist.addToIthIndex(3,35);
linkedlist.display();
linkedlist.reverse();
linkedlist.display();

var head; // head of list

/* Linked list Node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/*
 * Given a key, deletes the first occurrence of key in linked list
 */
function deleteNode(key) {
  // Store head node
  var temp = head,
    prev = null;

  // If head node itself holds the key to be deleted
  if (temp != null && temp.data == key) {
    head = temp.next; // Changed head
    return;
  }

  // Search for the key to be deleted, keep track of
  // the previous node as we need to change temp.next
  while (temp != null && temp.data != key) {
    prev = temp;
    temp = temp.next;
  }

  // If key was not present in linked list
  if (temp == null) return;

  // Unlink the node from linked list
  prev.next = temp.next;
}

/* Inserts a new Node at front of the list. */
function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

/*
 * This function prints contents of linked list starting from the given node
 */
function printList() {
  tnode = head;
  while (tnode != null) {
    console.log(tnode.data + " ");
    tnode = tnode.next;
  }
}

/*
 * Driver program to test above functions. Ideally this function should be in a
 * separate user class. It is kept here to keep code compact
 */

push(7);
push(1);
push(3);
push(2);

console.log("Created Linked list is:<br/>");
printList();

deleteNode(1); // Delete node with data 1

console.log("<br/>Linked List after Deletion of 1:<br/>");
printList();
