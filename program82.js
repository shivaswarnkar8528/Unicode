function yesterday(dateString) {
  // Create a new Date object from the given date string
  let date = new Date(dateString);

  // Subtract one day (86400000 milliseconds) from the time value
  date.setTime(date.getTime() - 86400000);

  // Format the result using the toDateString() method
  return date.toDateString();
}
