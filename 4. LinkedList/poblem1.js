// Problem Statement
// Given the number of nodes in a Linked List, and the elements in the linked list, print the even numbers
//  present in the whole list which are divisible by 3. If there are no even number in the whole list,
//  print “EMPTY”.

// Constraints
// 1 ≤ T ≤ 10
// 1 ≤ N ≤ 105
// -1018 ≤ value of each node ≤ 1018
// Time Constraint: 1s in C++

// Input Format
// First line contains an integer T, denoting number of test cases.
// For each test case,
// First line contains an integer N, denoting number of nodes.
// Second line contains 'N' spaced integers, denoting the values of nodes of the
// linked list, starting from the root node till the last node.

// Output Format
// For each of the T test cases:
// Print a single line containing integers, separated by a space. This line contains
// the integers in the order it appeared in the linked list.

// Sample Input
// 2
// 3
// -6 1 6
// 3
// 1 2 1

// Sample Output
// -6 6
// EMPTY

this.head = null; // head of the linked list
// linked list node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// insert the value at begining
let InsertAtBeg = (newData) => {
  //allocate the node and put in the data
  let newNode = new Node(newData);

  // make next of new node as head
  newNode.next = this.head;
  // move the head to point to new node
  this.head = newNode;
};

let PrintList = () => {
  // output value in single line
  let str = "";
  let node = this.head;
  let flag = false;
  let nodeData;
  while (node !== null) {
    nodeData = node.data;
    // if (nodeData % 2 == 0 && nodeData % 3 == 0) {
    // OR
    if (nodeData % 6 == 0) {
      //   if (nodeData % 3 == 0) {
      //     str += nodeData + " ";
      //     flag = true;
      //   }
      str += nodeData + " ";
      flag = true;
    }
    node = node.next;

    // // console.log(node.data);
    // str += nodeData + " "; // output value in single line
    // node = node.next;
    // flag = true;
  }
  if (flag == false) {
    str += "EMPTY";
  }

  return str;
};

InsertAtBeg(1);
InsertAtBeg(2);
InsertAtBeg(3);
InsertAtBeg(4);
InsertAtBeg(5);
InsertAtBeg(6);
InsertAtBeg(12);

console.log("Linked list is : " + PrintList());
