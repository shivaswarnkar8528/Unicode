function calculate_age(birth_date) {
  var now = new Date();
  var age = now.getFullYear() - birth_date.getFullYear();
  var month_diff = now.getMonth() - birth_date.getMonth();
  if (
    month_diff < 0 ||
    (month_diff === 0 && now.getDate() < birth_date.getDate())
  ) {
    age--;
  }
  return age;
}

console.log(calculate_age(new Date(1982, 11, 4))); // 32
console.log(calculate_age(new Date(1962, 1, 1))); // 53
