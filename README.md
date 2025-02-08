# JavaScript Function with Incorrect Input Handling

This repository contains a JavaScript function that demonstrates a common error related to incorrect input handling. The function `bar` calls the function `foo`, which performs addition. However, `bar` does not handle non-numeric or null/undefined inputs correctly, leading to unexpected results.

## Bug Description

The primary issue is that when the input parameters to `bar` are strings, the `+` operator performs string concatenation instead of numerical addition.  Additionally, when null or undefined values are passed, the function returns NaN.

## Bug Solution

The solution involves adding input validation to ensure the parameters are numbers before performing the addition. If the inputs are not numbers, the function returns an appropriate error message.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run both files in a JavaScript environment (e.g., Node.js) to observe the difference in output. 