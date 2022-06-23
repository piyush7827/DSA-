// [1,2,3,4,3,5,4,6,7,8] => total element = 10
// count  largest sum of consecutive Digits
//num = 4 (choose 4 cosucative digit)
// sum => 25

// condition
//num > array --> error message
// 10 -4 +1 = 7 (total no. of loops run)

function findLargest(array, num) {
  if (num > array) {
    throw new Error("num is greater than aray");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("result", result);
