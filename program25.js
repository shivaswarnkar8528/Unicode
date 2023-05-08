const checkAlphanumeric = (str) => {
  pattern = /^[a-z0-9]+$/i;
  return pattern.test(str);
};
console.log(checkAlphanumeric("5678ghjk"));
console.log(checkAlphanumeric("cgfvnb456vb%%^&HJ"));
