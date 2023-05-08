var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// display the reading status (i.e. display book name, author name and reading status) of the following books
const showData = (data) => {
  n = data.length;
  data.forEach((i) => {
    console.log(
      `Author:${i.author} , Book Name: ${i.title} , Reading Status: ${i.readingStatus}`
    );
  });
};
showData(library);
