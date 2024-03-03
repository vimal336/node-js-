function findWordLength(stri) {
  return stri.split(/\s+/).length;
}

console.log(findWordLength("hello javascript"));

//check a word is palindrome or not

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("malayalam"));

//fibonnacci series

let a = 0,
  b = 1,
  c;

let num = 10;

for (let i=1; i<=num; i++){
   console.log(a);
   c = a + b// 0+1 = 1
   a = b;// 1
   b = c; // 
}
