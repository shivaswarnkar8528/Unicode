// JavaScript function to hide email addresses to protect from unauthorized user.

const protect_email = (data) => {
  let substr1, substr2;
  if (data.indexOf("@") >= 5) {
    substr1 = data.substr(0, 5);
  }
  //only work for shorts emails
  if (data.indexOf("@") < 5) {
    substr1 = data.substr(0, data.indexOf("@") - 2);
  }
  let indexSubstr2 = data.indexOf("@");
  let n = data.length;
  substr2 = data.substr(indexSubstr2, n - indexSubstr2);
  let res = substr1 + "..." + substr2;
  return res;
};

// test cases
console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("shi@example.com"));
