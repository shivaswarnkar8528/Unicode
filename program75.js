const heapSort = (arr) => {
  const len = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }

  // One by one extract an element from heap
  for (let i = len - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
};

const heapify = (arr, len, i) => {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // left = 2*i + 1
  const right = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, len, largest);
  }
};

// Example usage:
const arr = [34, 7, 23, 32, 5, 62];
console.log(heapSort(arr)); // Output: [5, 7, 23, 32, 34, 62]
