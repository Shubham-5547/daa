// Given an array of integers between 1 and n, inclusive, where n is the length of the array, 
// write a function that returns the first integer that appears more than once (when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the input array, 
// your function should return the one whose first duplicate value has the minimum index.
// If no integer appears more than once, your function should return -1.

// Note that you're allowed to mutate the input array.

// Method 1:

// time O(n^2) | space O(n)

function firstDuplicateValue(array) {
  let minimumSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];
      if (value === valueToCompare) {
        minimumSecondIndex = Math.min(minimumSecondIndex, j);
      }
    }
  }
  if (minimumSecondIndex === array.length) return -1;
  return array[minimumSecondIndex];
}

// Method 2:

// time O(n) | space O(n)

function firstDuplicateValue(array) {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}


// Method 3:

// time O(n) | space O(1)

function firstDuplicateValue(array) {
  for(let value of array) {
    const absVlaue = Math.abs(value);
    if (array[absVlaue - 1] < 0) {
      return absVlaue;
    }
    array[absVlaue - 1] *= -1
  }
  return -1;
}
