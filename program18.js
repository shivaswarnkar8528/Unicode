const valid_email = (email) => {
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (pattern.test(email) == true) {
    return "ValidEmail";
  } else {
    return "InvalidEmail";
  }
};

console.log(valid_email("shiva.soni@gmail.com"));
