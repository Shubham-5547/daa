// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
// Non-increasing elements aren't necessarily exclusively decreasing they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// time O(n) | space O(1)

// Method 1:

function isMonotonic(array) {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breakDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breakDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}


// Method 2:

function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}
