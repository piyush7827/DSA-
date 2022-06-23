// string Anargam
// "hello" => "llheo" =>anagram
// "ajay" => "aajy" =>anagram
// "ajay" =>"aaay" =>nao a anagram

// condition
// 1. length check (for both strings) means length of string are same in both string
// 2. no. are letters are also same but arrangement doesn't matter
//  {h:1,e:1,l:2,o:1}

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return "not a anagram";
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (let items of string2) {
    if (!counter[items]) {
      return "not a anagram";
    }
    counter[items] -= 1;
  }
  return "this is anagram";
}

const result = isAnagram("hello", "lloeh");
console.log(result); // O(n)
