function date_diff_indays(date1, date2) {
  // Convert the dates to milliseconds since Jan 1, 1970
  var date1_ms = new Date(date1).getTime();
  var date2_ms = new Date(date2).getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert the difference to days and return it
  return Math.floor(difference_ms / (1000 * 60 * 60 * 24));
}

// Example usage
console.log(date_diff_indays("04/02/2014", "11/04/2014")); // Output: 216
console.log(date_diff_indays("12/02/2014", "11/04/2014")); // Output: -28
