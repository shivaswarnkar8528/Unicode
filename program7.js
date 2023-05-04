// string_parameterize
const string_parameterize = (data) => {
  let res = data.toLowerCase();
  res = res.split(" ").join("_");
  return res;
};

console.log(string_parameterize("Robin Singh from USA"));
