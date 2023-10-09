// Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, 
// write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

// Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10]. 
// you have access to an unlimited amount of 1 s, 5 s, and 10 s.

// If it's impossible to make change for the target amount, return -1.

// time O(nd) | space O(n)

function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for(const denom of denoms) {
    for(let amount = 0; amount < numOfCoins.length; amount++) {
      if(denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], 1 + numOfCoins[amount - denom]);
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
