// JavaScript function to convert a string into camel case
const camelize = (data) => {
  data = data.split(" ");
  for (var i = 1; i < data.length; i++) {
    data[i] = data[i][0].toUpperCase() + data[i].substr(1);
  }
  data = data.join("");
  return data;
};
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
