const repeat = (str, n) => {
  let res = "";
  n = typeof n === "undefined" ? 1 : n;
  for (var i = 0; i < n; i++) {
    res += str;
  }
  return res;
};
console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
