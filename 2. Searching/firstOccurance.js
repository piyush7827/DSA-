function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let bestIndexTillnow = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      bestIndexTillnow = mid;
      end = mid - 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return bestIndexTillnow;
}

let firstOccurance = binarySearch(
  [1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5],
  4
);

console.log(firstOccurance);

// let thirdoccurrence = firstOccurance + 2;

// if (arr[thirdoccurrence] === key) {
//   console.log(thirdoccurrence);
// } else console.log("404 nt found");
