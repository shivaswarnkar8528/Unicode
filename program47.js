function countZeroBits(num) {
  if (!Number.isInteger(num)) {
    return "Parameter value is not an Integer!";
  }

  const binaryString = num.toString(2);
  let count = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "0") {
      count++;
    }
  }

  return count;
}

console.log(countZeroBits(45));
console.log(countZeroBits(17));
console.log(countZeroBits(15));
