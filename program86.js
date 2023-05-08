function days_of_a_year(year) {
  var d = new Date(year, 11, 31);
  return d.getDate();
}

// Example usage:
console.log(days_of_a_year(2015)); // Output: 365
console.log(days_of_a_year(2016)); // Output: 366
