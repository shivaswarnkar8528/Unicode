function countWords(str) {
  // remove white-space from start and end position
  str = str.trim();

  // convert 2 or more spaces to 1
  str = str.replace(/\s{2,}/g, " ");

  // exclude newline with a start spacing
  str = str.replace(/(\r\n|\n|\r)/gm, "");

  // count number of words
  return str.split(" ").length;
}
console.log(countWords("Shiva Soni  hello h "));
