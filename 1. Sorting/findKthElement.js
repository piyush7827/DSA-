// let arr = [5, 8, 7, 6, 3, 4];
// let k = 3;

// for (let i = 0; i < k; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr[arr.length - k]);

let arr = ["India", "Australia", "China", "Russia", "Brazil", "Japan"];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j].localeCompare(arr[j + 1]) != -1) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
