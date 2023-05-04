// Write a JavaScript function to capitalize the first letter of each word in a string
capitalize_Words = (data) => {
  data = data.split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i][0].toUpperCase() + data[i].substr(1);
  }
  data = data.join(" ");
  return data;
};
console.log(capitalize_Words("js string exercises'"));
