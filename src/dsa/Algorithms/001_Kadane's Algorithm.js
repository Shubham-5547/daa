// Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the  
// integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each other in the input array).

// time O(n) | space O(1)

function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for(let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
