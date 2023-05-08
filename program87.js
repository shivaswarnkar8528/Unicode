function quarter_of_the_year(date) {
  var month = date.getMonth() + 1;
  return Math.ceil(month / 3);
}

// Example usage:
console.log(quarter_of_the_year(new Date(2015, 1, 21))); // Output: 2
console.log(quarter_of_the_year(new Date(2015, 10, 18))); // Output: 4
