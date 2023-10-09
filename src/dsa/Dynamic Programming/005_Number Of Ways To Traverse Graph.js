// You're given two positive integers representing the width and height of a grid-shaped, rectangular graph. 
// Write a function that returns the number of ways to reach the bottom right corner of the graph when starting at the top left corner. 
// Each move you take must either go down or right. In other words, you can never move up or left in the graph.

// For example, given the graph illustrated below, with width= 2 and height = 3, 
// there are three ways to reach the bottom right corner when starting at the top left corner.

// 1. Down, Down, Right

// 2. Right, Down, Down

// 3. Down, Right, Down

// Note: you may assume that width height >= 2. In other words, the graph will never be a 1x1 grid.

// Method 1:

// time O(2^(n*m)) | space O(n*m)

function numberOfWaysToTraverseGraph(width, height) {
  if (width === 1 || height === 1) return 1;
  return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
}


// Method 2:

// time O(n*m) | space O(n*m)

function numberOfWaysToTraverseGraph(width, height) {
  const numberOfWays = [];
  for (let i = 0; i < height + 1; i++) {
    numberOfWays.push([]);
    for (let j = 0; i < width + 1; j++) {
        numberOfWays[i].push(0);
    }
  }
  for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
    for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
      if (widthIdx === 1 || heightIdx === 1) {
        numberOfWays[heightIdx][widthIdx] = 1;
      } else {
        const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
        const waysUp = numberOfWays[heightIdx - 1][widthIdx];
        numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }
  return numberOfWays[height][width];
}



// Method 3:

// time O(n+m) | space O(1)

function numberOfWaysToTraverseGraph(width, height) {
  const xDistanceToCorner = width - 1;
  const yDistanceToCorner = height - 1;
  const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);
  return Math.floor(numerator / denominator);
}
function factorial(num) {
  let result = 1;
  for(let n = 2; n < num + 1; n++) {
    result *= n;
  }
  return result;
}
