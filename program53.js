function findProductSign(num1, num2, num3) {
  let product = num1 * num2 * num3;

  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is -");
  } else {
    alert("The product is 0");
  }
}

findProductSign(3, -7, 2);
findProductSign(2, 0, 5);
findProductSign(-1, -2, 3);

