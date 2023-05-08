quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right));
};

var arr = [34, 7, 23, 32, 5, 62];
console.log(quickSort(arr)); // Output: [5, 7, 23, 32, 34, 62]
