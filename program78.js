const shellSort = (arr) => {
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};

// Example usage:
let arr = [5, 2, 4, 6, 1, 3];
console.log(shellSort(arr)); // Output: [1, 2, 3, 4, 5, 6]
