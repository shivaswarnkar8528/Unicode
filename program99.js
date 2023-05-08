function csvToArray(csvString) {
  const rows = csvString.split("\n");
  const result = [];
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].split(",");
    result.push(columns);
  }
  return result;
}

// Example usage
const csvString = "Name,Age\nJohn,30\nJane,25\n";
const array = csvToArray(csvString);
console.log(array);
