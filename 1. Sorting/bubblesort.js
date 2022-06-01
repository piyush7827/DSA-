let arr = [5, 8, 7, 6, 3, 4];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// for (let i = 3; i < arr.length; i++) {
//   for (let j = 3; j < arr.length; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

// function printMatrix(matrix, N) {
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       console.log(matrix[i][j]);
//     }
//   }
//   return null;
// }

// printMatrix();

// function bubbleSort(inputArray) {
//   for (var i = 0; i < inputArray.length; i++) {
//     var isSwapped = false;
//     // Last i elements are already sorted
//     for (var j = 0; j < inputArray.length - i - 1; j++) {
//       // Check if the current element is greater than the next element
//       if (inputArray[j] > inputArray[j + 1]) {
//         // If the condition is true then swap them
//         var temp = inputArray[j];
//         inputArray[j] = inputArray[j + 1];
//         inputArray[j + 1] = temp;
//         isSwapped = true;
//       }
//     }
//     if (!isSwapped) break;
//   }
//   return inputArray;
// }
