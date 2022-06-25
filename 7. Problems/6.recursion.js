// Recursion ===> when function call itself
// otherwise it will get called for infinite time
// if a function call itself then there must be an end point.

// let counter = 1;

// function demo(num) {
//   if (counter > num) {
//     return;
//   }
//   console.log("Recursion start" + counter);
//   counter++;
//   demo(num);
//   console.log("demo", demo);
// }

// demo(10);

// Sorting using Recursive function
//[2,3,1,4] ===> By Default Case

// let myArray = [2, 3, 1, 4, 8, 7, 9, 6];
// let myNewList = [];
// let i = 0;
// let j = 1;

// function isSorted(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// function sortCheck(array) {
//   if (isSorted(array)) {
//     myNewList = array;
//     return;
//   } else if (array[i] < array[j]) {
//     i++;
//     j++;
//     sortCheck(array);
//   } else {
//     [array[i], array[j]] = [array[j], array[i]];
//     i = 0;
//     j = 1;
//     sortCheck(array);
//   }
// }

// sortCheck(myArray);
// console.log(myNewList);

// Helper Recursive Function
//[1,2,3,4,5,6,7,8,9]----input
//[1,3,5,7,9]---- output

// condition
// number%2 !== 0

function findOdd(array) {
  let result = [];
  function helperRecursive(inputArray) {
    if (inputArray.length === 0) {
      return;
    }
    if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0]);
    }
    helperRecursive(inputArray.slice(1));
  }
  helperRecursive(array); //1st time calling
  return result;
}

const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);
