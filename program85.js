function timeConvert(minutes) {
  var hours = Math.floor(minutes / 60);
  var minutes = minutes % 60;
  return (
    minutes + " minutes = " + hours + " hour(s) and " + minutes + " minute(s)."
  );
}

// Example usage:
console.log(timeConvert(200)); // Output: "200 minutes = 3 hour(s) and 20 minute(s)."
