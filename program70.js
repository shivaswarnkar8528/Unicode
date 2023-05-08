Array.prototype.binarySearch = function (searchValue) {
  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = this[currentIndex];

    if (currentElement === searchValue) {
      return currentIndex;
    } else if (currentElement < searchValue) {
      minIndex = currentIndex + 1;
    } else {
      maxIndex = currentIndex - 1;
    }
  }

  return -1;
};

var array = [0, 1, 2, 3, 4, 5, 6];
console.log(array.binarySearch(5));
