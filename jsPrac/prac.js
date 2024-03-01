
function findWordLength(stri){
 return stri.split(/\s+/).length;
}

console.log(findWordLength("hello javascript"));

function isPalindrome(str){
 return str === str.split('').reverse().join('');
}

console.log()