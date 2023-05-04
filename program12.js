// uncamelize a string
uncamelize = (data, addWith) => {
  addWith = typeof addWith === "undefined" ? " " : addWith;
  data = data.replace(/[A-Z]/g, (letter) => {
    return addWith + letter.toLowerCase();
  });
  return data;
};
// test cases
console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
