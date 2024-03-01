
function findWordLength(stri){
 return stri.split(/\s+/).length;
}

console.log(findWordLength("hello javascript"));

//check a word is palindrome or not

function isPalindrome(str){
 return str === str.split('').reverse().join('');
}

if(isPalindrome==true){
 console.log("this is palindrome")
}else{
 console.log("not palindrome")
}

console.log(isPalindrome("racecar"));