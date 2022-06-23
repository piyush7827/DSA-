// checking square in another array
// array1=[1,2,3,4] array2=[1,9,4,16]

// condition
//if(array1[i]*array1[i] === array2[j])
// let isSquare = true

// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// const result = isSquareCheck((array1 = [1, 2, 3, 4]), (array2 = [1, 9, 4, 16]));
// console.log("result", result);
//  time complexity= O(n^2)

// alternate solution for time complxity

// checking Square in another Array
// arr1= [1,2,3,4]  arr2 = [1,9,4,16]----case1
// arr1= [1,2,4,2] arr2 = [1,4,4,16]-----case2

// condition
// for case2
//map1 ={1:1, 2:2, 4:1} {key:value}
//map2 ={1:1,4:2, 16:1}
// checking key and key^2 present and its value

function checkSquare(array1, array2) {
  let map1 = {};
  let map2 = {};
  for (item1 of array1) {
    // n times
    // key = value
    map1[item1] = (map1[item1] || 0) + 1;
    console.log("map1", map1);
  }
  for (item2 of array2) {
    // n times
    map2[item2] = (map2[item2] || 0) + 1;
    console.log("map2", map2);
  }

  for (let key in map1) {
    // n times
    console.log("key", key);
    if (!map2[key * key]) {
      // object key compare in terms of square
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // value compare
      return false;
    }
  }
  return true;
}

let Result = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(Result);

// time complexity = O(n)
