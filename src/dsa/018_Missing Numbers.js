// You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums +2. 
// This means that two numbers in this range are missing from the list.
// Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

// Method 1:

// time O(n) | space O(n)

function missingNumbers(nums) {
  const includeNums = new Set(nums);
  let solution = [];
  for (let num = 1; num < nums.length + 3; num++) {
    if (!includeNums.has(num)) solution.push(num);
  }
  return solution;
}


// Method 2:

// time O(n) | space O(1)

function missingNumbers(nums) {
  let solutionXOR = 0;
  for (let i = 0; i < nums.length + 3; i++) {
    solutionXOR ^= i;
    if (i < nums.length) {
      solutionXOR ^= nums[i];
    }
  }
  const solution = [0, 0];
  const setBit = solutionXOR & -solutionXOR;
  for (let i = 0; i < nums.length + 3; i++) {
    if ((i & setBit) === 0) {
      solution[0] ^= i;
    } else {
      solution[1] ^= i;
    }
    if (i < nums.length) {
      if ((nums[i] & setBit) === 0) {
        solution[0] ^= nums[i];
      } else {
        solution[1] ^= nums[i];
      }
    }
  }
  solution.sort((a, b) => a - b);
  return solution;
}
