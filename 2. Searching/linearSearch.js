// function linearSearch(arr, key) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === key) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([1, 3, 4, 6, 7, 9], 7));

function globalLinearSearch(arr, key) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      results.push(i);
    }
  }
  // If results array is empty, return -1
  if (!results) {
    return -1;
  }

  return results;
}

console.log(globalLinearSearch([1, 3, 5, 7, 9, 11, 15], 20));
