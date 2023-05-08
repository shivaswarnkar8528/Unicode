function min_date(dates) {
  return new Date(
    Math.min.apply(
      null,
      dates.map(function (date) {
        return new Date(date);
      })
    )
  )
    .toISOString()
    .slice(0, 10);
}

// Example usage:
console.log(min_date(["2015/02/01", "2015/02/02", "2015/01/03"])); // Output: "2015/01/03"
