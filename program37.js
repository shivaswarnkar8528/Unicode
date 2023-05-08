const genSubset = (str) => {
  const arr1 = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      arr1.push(str.slice(i, j));
    }
  }
  return arr1;
};
console.log(genSubset("dog"));
