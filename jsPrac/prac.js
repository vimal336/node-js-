
function findWordLength(stri){
 return stri.split(/\s+/).length;
}

console.log(findWordLength("hello javascript"));

//check a word is palindrome or not

function isPalindrome(str){
 return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));