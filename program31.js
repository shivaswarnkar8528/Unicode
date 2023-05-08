const getObjProperties = (obj) => {
  var allProperties = Object.getOwnPropertyNames(obj);
  allProperties = allProperties.join(",");
  console.log(allProperties);
};
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
getObjProperties(student);
