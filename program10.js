swapcase = (data) => {
  var res = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i] == data[i].toUpperCase()) {
      res += data[i].toLowerCase();
    }
    if (data[i] == data[i].toLowerCase()) {
      res += data[i].toUpperCase();
    }
  }
  return res;
};
console.log(swapcase("AaBb"));
