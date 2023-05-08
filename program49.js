function checkOddOrEven(num) {
  if (typeof num !== "number") {
    return "Parameter value must be number!";
  }

  if (num % 2 === 0) {
    return `${num} is an even number.`;
  } else {
    return `${num} is an odd number.`;
  }
}

// Test the function with sample input
console.log(checkOddOrEven(1));
console.log(checkOddOrEven(4));
console.log(checkOddOrEven(9));
console.log(checkOddOrEven("15"));
