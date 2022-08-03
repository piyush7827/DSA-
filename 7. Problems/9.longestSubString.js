// Longest SubString without Repeating Characters

// input => S= "abcabcbb"
//output => 3
// Explanation ==> the answer is "abc" with the length of 3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // sliding window appraoch
  if (!s) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let maxlength = 0;

  const Uniquecharacter = new Set();
  while (end < s.length) {
    if (!Uniquecharacter.has(s[end])) {
      Uniquecharacter.add(s[end]);
      end++;
      maxlength = Math.max(maxlength, Uniquecharacter.size);
    } else {
      Uniquecharacter.delete(s[start]);
      start++;
    }
  }
  return maxlength;
};

let res = lengthOfLongestSubstring("abcabcbb");
console.log(res);
