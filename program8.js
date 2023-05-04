// capitalize string
const capitalize = (data) => {
  let first_letter = data.substr(0, 1);
  let remaining_str = data.substr(1, data.length - 1);
  let res = first_letter.toUpperCase() + remaining_str;
  return res;
};
console.log(capitalize("js string exercises"));
