insert = (string, addStr = "", position = 0) => {
  string = string.slice(0, position) + addStr + string.slice(position);
  return string;
};
//test cases
console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
