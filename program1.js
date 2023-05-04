// function to check whether an `input` is a string or not
is_string = (data) => {
  if (typeof data == "string") {
    //we can also write inside if (typeof data == "string" || data instanceof String)
    console.log("true");
  } else {
    console.log("false");
  }
};
// test case 1
console.log(is_string("w3resourse"));

// test case 2
console.log(is_string([1, 2, 4, 0]));
