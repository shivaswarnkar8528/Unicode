const validUrl = (str) => {
  const pattern =
    /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9\-]+(?:\.[a-z]{2,}){1,2}(?:\/[^\s]*)?$/i;
  if (pattern.test(str)) {
    return true;
  } else {
    return false;
  }
};
console.log(validUrl("careeralfa.com"));
