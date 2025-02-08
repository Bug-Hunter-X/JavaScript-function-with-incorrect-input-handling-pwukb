function foo(a, b) {
  // Input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function bar(a, b) {
  // Input validation
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Inputs cannot be null or undefined');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return foo(a, b) * 2;
}

//Example usage
console.log(bar(2, 3)); // Output: 10

//Example of error handling

try {
  console.log(bar("2", "3"));
} catch (error) {
  console.error(error.message); //Output: Inputs must be numbers
}

try {
  console.log(bar(null, 3));
} catch (error) {
  console.error(error.message); //Output: Inputs cannot be null or undefined
}

try {
  console.log(bar(2, undefined));
} catch (error) {
  console.error(error.message); //Output: Inputs cannot be null or undefined
} 