const dateSearch = (str) => {
  let pattern =
    /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
  if (pattern.test(str)) {
    return "true";
  } else {
    return "false";
  }
};
console.log(dateSearch("1/01/2015"));
