function numberToArray(num) {
  return num
    .toString()
    .split("")
    .map((digit) => parseInt(digit));
}

// Example usage
const num = 12345;
const digits = numberToArray(num);
console.log(digits); // [1, 2, 3, 4, 5]
