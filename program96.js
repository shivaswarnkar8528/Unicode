function arrayObjectsToCSV(data, columns) {
  // Create the header row
  const header = columns.join(",") + "\n";

  // Create the data rows
  const rows = data
    .map((obj) => columns.map((column) => obj[column]).join(","))
    .join("\n");

  // Combine the header and rows and return the result
  return header + rows;
}

// Example usage
const data = [
  { name: "John", age: 30, email: "john@example.com" },
  { name: "Mary", age: 25, email: "mary@example.com" },
  { name: "Bob", age: 40, email: "bob@example.com" },
];
const columns = ["name", "email"];
const csvString = arrayObjectsToCSV(data, columns);
console.log(csvString);
