// function insertionSort(inputArr) {
//   let n = inputArr.length;
//   for (let i = 1; i < n; i++) {
//     // Choosing the first element of the unsorted array
//     let current = inputArr[i];
//     // The last element of our sorted subarray
//     let j = i - 1;

//     // Find the position of the element in the sorted subarray
//     while (j > -1 && current < inputArr[j]) {
//       inputArr[j + 1] = inputArr[j];
//       j--;
//     }

//     inputArr[j + 1] = current;
//   }
//   return inputArr;
// }

let arr = [5, 6, 7, 3, 1, 9, 2, 4, 8];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else {
      break;
    }
  }
}

console.log(arr);
