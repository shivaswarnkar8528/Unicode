function displayLarger(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is larger.");
  } else if (num2 > num1) {
    console.log(num2 + " is larger.");
  } else {
    console.log("Both numbers are equal.");
  }
}

// Test the function
displayLarger(10, 5);
displayLarger(-2, 8);
displayLarger(4, 4);
