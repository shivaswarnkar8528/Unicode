function isPowerOfFour(num) {
  if (typeof num !== "number") {
    return "It must be number!";
  }

  if (num <= 0) {
    return false;
  }

  if ((num & (num - 1)) === 0 && (num & 0xaaaaaaaa) === 0) {
    return true;
  } else {
    return false;
  }
}

// Test the function with sample input
console.log(isPowerOfFour(256));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(2));
console.log(isPowerOfFour("16"));
