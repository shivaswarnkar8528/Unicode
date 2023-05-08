function day_of_the_month(date) {
  return ("0" + date.getDate()).slice(-2);
}

// Example usage
const d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); // Output: "01"
