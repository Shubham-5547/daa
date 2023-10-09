// Write a function that takes in a non-empty, unordered array of positive integers and 
// returns the array's majority element without sorting the array and without using more than constant space.
// An array's majority element is an element of the array that appears in over half of its indices. 
// Note that the most common element of an array (the element that appears the most times in the array) isn't necessarily the array's majority element; 

// for example, the arrays [3, 2, 2, 1] and [3, 4, 2, 2, 1] both have 2 as their most common element, yet neither of these arrays have a majority element, 
// because neither 2 nor any other element appears in over half of the respective arrays' indices.

// You can assume that the input array will always have a majority element.

// Method 1:

// time O(n) | space O(1)

function majorityElement(array) {
  let count = 0;
  let answer = null;
  for (let value of array) {
    if (count === 0) {
      answer = value;
    }
    if (value === answer) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return answer;
}

// Method 2:

// time O(n) | space O(1)

function majorityElement(array) {
  let answer = 0;
  for (let currentBit = 0; currentBit < 32; currentBit++) {
    const currentBitValue = 1 << currentBit;
    let onesCount = 0;
    for (let num of array) {
      if ((num & currentBitValue) !== 0) {
        onesCount += 1;
      }
    }
    if (onesCount > (array.length / 2)) {
      answer += currentBitValue;
    }
  }
  return answer;
}
