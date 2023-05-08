//Write a Bubble Sort algorithm in JavaScript. Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, Sample Data: [6,4,0, 3,-2,1] Expected Output : [-2, 0, 1, 3, 4, 6]

const BubbleSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    flag = false;
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }
    if (flag == false) {
      return arr;
    }
  }
  return arr;
};
arr = [1, 3, 5, 69, 7, 8, 9];
console.log(BubbleSort(arr));
