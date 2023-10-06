// Given bro non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// Asubsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. 

// For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. 

// Note that a single number in an array and the away itself are both valid subsequences of the array.

// Method 1: 

  let arrdx = 0;
  let seqdx = 0;
  while (arrdx < array.length && seqdx < sequence.length) {
    if (array[arrdx] === sequence[seqdx]) seqdx++;
    arrdx++;
  }
  return seqdx === sequence.length;


// Method 2:

  let seqdx = 0;
  for (const value of array) {
    if (seqdx === sequence.length) break;
    if (sequence[seqdx] === value) seqdx++;
  }
  return seqdx === sequence.length;
