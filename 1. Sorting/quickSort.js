function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let smaller = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, smaller);
      smaller++;
    }
  }
  swap(arr, end, smaller);
  return smaller;
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let part = partition(arr, start, end);
  quickSort(arr, start, part - 1);
  quickSort(arr, part + 1, end);
}

let arr = [5, 6, 8, 4, 3, 7, 1, 9, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
