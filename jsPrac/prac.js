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

// let a = 0,
//   b = 1,
//   c;

// let num = 5;

// for (let i=1; i<=num; i++){
//    console.log(a);
//    c = a + b
//    a = b;
//    b = c;
// }

let a = 20,
  b = 30;
function divide(a, b) {
  if (b == 0) {
    throw "Division by zero";
  }

  return a / b;
}

//armstrong number



let val = 222;
let originalVal = val; // Store the original value to compare later
let sum = 0;

while (val > 0) {
    let remain = val % 10;
    sum += remain * remain * remain;
    val = Math.floor(val / 10); // Move to the next digit
}

if (sum === originalVal) {
    console.log(`${originalVal} is an Armstrong number`);
} else {
    console.log(`${originalVal} is not an Armstrong number`);
}

