// function selectionSort(inputArray) {
//   var i, j, minimumIndex;

//   for (i = 0; i < inputArray.length - 1; i++) {
//     // Initialize the current element as minimumIndex
//     minimumIndex = i;
//     for (j = i + 1; j < inputArray.length; j++) {
//       if (inputArray[j] < inputArray[minimumIndex]) {
//         minimumIndex = j;
//       }
//     }
//     // Swap the found minimum element with the current element
//     if (minimumIndex != i) {
//       var temp = inputArray[minimumIndex];
//       inputArray[minimumIndex] = inputArray[i];
//       inputArray[i] = temp;
//     }
//   }
// }

// let arr = [5, 8, 3, 6, 4, 2, 9, 1, 7];

// function findMin(arr, startIndex) {
//   let minIndexTillNow = startIndex;
//   for (let i = startIndex; i < arr.length; i++) {
//     if (arr[minIndexTillNow] > arr[i]) {
//       minIndexTillNow = i;
//     }
//   }
//   return minIndexTillNow;
// }

// //  go to each index
// for (let i = 0; i < arr.length; i++) {
//   //  find the minimum index from i to length of array
//   let minIndex = findMin(arr, i);

//   // swap with i index
//   let temp = arr[i];
//   arr[i] = arr[minIndex];
//   arr[minIndex] = temp;
// }

// console.log(arr);

// Given an object of employee name and there salary, find the second most paid employee of the
// company

let arr = [
  { name: "Ram", salary: 100000 },
  { name: "Ramesh", salary: 10000 },
  { name: "Rakesh", salary: 500000 },
  { name: "Riya", salary: 650000 },
  { name: "Rithik", salary: 450000 },
  { name: "Ritesh", salary: 230000 },
];

function findMin(arr, startIndex) {
  let minIndexTillNow = startIndex;
  for (let i = startIndex; i < arr.length; i++) {
    if (arr[minIndexTillNow].salary > arr[i].salary) {
      minIndexTillNow = i;
    }
  }
  return minIndexTillNow;
}

//  go to each index
for (let i = 0; i < arr.length; i++) {
  //  find the minimum index from i to length of array
  let minIndex = findMin(arr, i);

  // swap with i index
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr[arr.length - 2].name);
