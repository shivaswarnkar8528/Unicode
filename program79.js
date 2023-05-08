function is_weekend(dateStr) {
  var date = new Date(dateStr);
  var day = date.getDay();

  if (day === 6 || day === 0) {
    return "weekend";
  } else {
    return "weekday";
  }
}

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
