//Armstrong number=> it is the sum of the cube of its digit is equal to the number
/*
ex. 153 => 1^3+5^3+3^3= 1+125+27= 153

*/

// let num = 153;
// let res = 0,
//   rem;
// let temp = num;

// while (temp > 0) {
//   rem = temp % 10;
//   res += rem * rem * rem;
//   temp = parseInt(temp / 10);
//   console.log(rem + "", +res + "", +temp);
// }
// if (num == res) {
//   console.log("Armstrong number");
// } else {
//   console.log("Not an Armstrong number");
// }

/*
Given a number N, the task is to find the sum of digits of a number at even and odd places.
input => N = 54873
output => sum odd = 16
          sum even = 11

*/

// let num = 54873;
// let str = num.toString();
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i < str.length; i++) {
//   if ((i + 1) % 2 == 0) {
//     sumEven += parseInt(str.charAt(i));
//   } else {
//     sumOdd += parseInt(str.charAt(i));
//   }
// }

// console.log(`Sum Even : ${sumEven}`);
// console.log(`Sum Odd : ${sumOdd}`);

/*
for a given array A, you are supposed to find out the maximum of j-i such that A[i]<=A[j]

input => A=[4,5,7,2]
output => 2 

explanation =
(i,j)        diff(j-i)    i(index differnce)
(4,5)       1           1
(4,7)       3           2 =. ans
(4,2)       --          --
(5,7)       2           1
(5,2)       --          --                      
(7,2)       --          --

*/

const arr = [4, 5, 7, 2];
let maxIndexDiff = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] <= arr[j]) {
      maxIndexDiff = Math.max(maxIndexDiff, j - i);
    }
  }
}

console.log(maxIndexDiff);
