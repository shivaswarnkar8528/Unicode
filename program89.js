function unix_timestamp_to_time(timestamp) {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
}

// Example usage:
console.log(unix_timestamp_to_time(1620488536)); // Output: "15:55:
