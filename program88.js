function days_passed(date) {
  var start = new Date(date.getFullYear(), 0, 0);
  var diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

// Example usage:
console.log(days_passed(new Date(2015, 0, 15))); // Output: 15
console.log(days_passed(new Date(2015, 11, 14))); // Output: 348
