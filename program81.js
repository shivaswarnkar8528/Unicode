function lastday(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Example usage:
console.log(lastday(2014, 0)); // Output: 31
console.log(lastday(2014, 1)); // Output: 28
console.log(lastday(2014, 11)); // Output: 31
