const vowel_count = (str) => {
  return str.match(/[aeiou]/gi).length;
};
console.log(vowel_count("hello this is javascript code for vowel count"));
