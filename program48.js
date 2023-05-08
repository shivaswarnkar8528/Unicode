function checkOddOrEven(num) {
  if (typeof num !== "number") {
    return "Parameter value must be number!";
  }

  if (num & 1) {
    return `${num} is an odd number.`;
  } else {
    return `${num} is an even number.`;
  }
}

console.log(checkOddOrEven(1));
console.log(checkOddOrEven(4));
console.log(checkOddOrEven(9));
console.log(checkOddOrEven("15"));
