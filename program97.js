function findValue(obj, key, results = []) {
  if (obj && typeof obj === "object") {
    if (obj[key] !== undefined) {
      results.push(obj[key]);
    }
    Object.values(obj).forEach((val) => findValue(val, key, results));
  }
  return results;
}

// Example usage
const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: {
      f: 3,
      g: 4,
    },
  },
  h: {
    i: {
      j: 5,
      k: 6,
    },
    l: {
      m: 7,
      n: 8,
    },
  },
};
const key = "c";
const values = findValue(obj, key);
console.log(values); // [1]
