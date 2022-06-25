// check if a given string is a Palindrom?

// level-->level ===true
//noon--->noon ===true
//ajay--->yaja ===false

// Case 1

// using javaScript provided function

// function isPalindrom(str) {
//   let reverse = str.split("").reverse().join("");

//   return str.toLowerCase() === reverse.toLowerCase();
// }
// let result = isPalindrom("level");

// console.log(result);

// case 2

function isPal(str) {
  let newStr = str.toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }
  return true;
}

let Res = isPal("level");
console.log(Res);
