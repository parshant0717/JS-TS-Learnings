// What is function: Function is a block of code which helps to manage repetative action in readable way. We can reuse it as much as we want it helps in DRY consept(Do not repeat yourself).

/* ## 1) Function declaration or named function: It's a standered way to writing a function. */
function isEven(x) {
  if (x) {
    return x % 2 === 0;
  }
  return false;
}

const resultEven = isEven(2);
console.log(resultEven);

// So this is named function or function declaration.

//## Advantage or Disadvantage
// It can be hoisted meaning we can call the function befor initializing, Because it get stored into memory before the execution.
//example:

const resultOdd = isOdd(3); // here we called it before initialization
console.log(resultOdd);

function isOdd(x) {
  if (x) {
    return x % 2 !== 0;
  }
  return false;
}

/* ## 2) Function Expression: In javascript function is also a value so we can treat a function as value.
 */
//example:
const isZero = function (x) {
  return x === 0 ? true : false;
};

console.log(isZero(2));

//## Advantage or Disadvantage
// It can't be hoisted because it created at execution.
// We can call it outside the block as well, because it treatened as value/expression.

/*  ## 3) Arrow or callback Function: We can pass it as an argument to another function.

*/
//Creating an Arrow funtion
const sum = (x, y) => {
  return x + y;
};

console.log(sum(3, 5));

//

// Passing it as an agrument in setTimeOut.
setTimeout(() => {
  console.log(5 - 2);
}, 2000);
