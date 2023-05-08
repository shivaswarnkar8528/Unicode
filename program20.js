const trim = (str) => {
  if (typeof str === "string") {
    str = str.replace(/^\s+|\s+$/g, "");
    return str;
  } else {
    return false;
  }
};

console.log(trim(" hello world "));
