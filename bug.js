function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10

//Problem: When the parameters are not numbers,  the result is not correct.
console.log(bar("2", "3")); //Output: "23"
//The expected result for bar("2", "3") is 10, but it gives "23" because of string concatenation. 

//Another problem is that the function does not handle null or undefined values correctly.
console.log(bar(null, 3)); //Output: NaN
console.log(bar(2, undefined)); //Output: NaN

//The expected result is to handle such cases, and maybe throw an error to let the user know the issue.