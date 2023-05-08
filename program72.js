function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.substring(1, str.length - 1));
}

var str = "racecar";
console.log(isPalindrome(str)); // Output: true

var str2 = "hello";
console.log(isPalindrome(str2)); // Output: false
