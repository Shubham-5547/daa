// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 

// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.

// If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array, you can't add

// a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Method 1:
 
// By hash table:

const nums = {};
  for (let i=0; i< array.length; i++) {
    const num = array [i];
    const potentialmatch = targetSum - num;
    if (potentialmatch in nums) {
      return [potentialmatch, num]
    } else {
      nums[num] = true;
    }
  }
  return [];

// Method 2:

// By Two num:

for (let i=0; i< array.length; i++) {
    const num1 = array [i];
    for (let j=0; j< array.length; j++) {
      const num2 = array [j];
      if (num1 + num2 === targetSum) {
        return [num1, num2];
      }
    }
  }
  return [];


