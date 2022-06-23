// checking sum zero
// input => [-5,-4,-3,-2,0,2,4,6,8]
// output => [-4,4]

// function sumPairZero(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 1; j < array.length - 1; j++) {
//       if (array[i] + array[j] == 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
// }

// const result = sumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result); //[-4,4] // O(n^2) => quadretic

// another solution for linear time complexity

function sumZeroPair(array) {
  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    while (left < right) {
      sum = array[left] + array[right];

      if (sum == 0) {
        return [array[left], array[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
}

let result = sumZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result); // O(n) => linear time complexity
