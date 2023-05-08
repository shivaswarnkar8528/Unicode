function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var middleIndex = Math.floor(arr.length / 2);
  var leftArr = arr.slice(0, middleIndex);
  var rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  var resultArr = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

var arr = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(arr)); // Output: [5, 7, 23, 32, 34, 62]
