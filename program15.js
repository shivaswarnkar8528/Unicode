humanize_format = (n) => {
  let temp = "";

  let remainder = 0;
  if (n) {
    remainder = n % 10;
    if (remainder == 1) {
      temp = "st";
    }
    if (remainder == 2) {
      temp = "nd";
    }
    if (remainder == 3) {
      temp = "rd";
    }
    if (remainder > 3) {
      temp = "th";
    }
  } else {
    return "";
  }
  return n + temp;
};
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
