// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only e s and 1 s. 
// The matrix represents a two-toned image, where each 1 represents black and each e represents white. 
// An island is defined as any number of 1s that are horizontally or vertically adjacent (but not diagonally adjacent) and that don't touch the border of the image. 
// In other words, a group of horizontally or vertically adjacent 1 s isn't an island if any of those 1s are in the first row, last row, first column, 
// or last column of the input matrix.

// Note that an island can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

// You can think of islands as patches of black that don't touch the border of the two-toned image.

// Write a function that returns a modified version of the input matrix, where all of the islands are removed. You remove an island by replacing it with 0s.

// Naturally, you're allowed to mutate the input matrix.


// time O(wh) | space O(wh)

function removeIslands(matrix) {
  const onesConnectedToBorder = [];
  for(let row = 0; row < matrix.length; row++) {
    onesConnectedToBorder.push([]);
    for(let col = 0; col < matrix[0].length; col++) {
      onesConnectedToBorder[row].push(false);
    }
  }
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if(!isBorder) continue;
      if(matrix[row][col] !== 1) continue;
      findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
    }
  }
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 1; col < matrix[row].length - 1; col++) {
      if(onesConnectedToBorder[row][col]) continue;
      matrix[row][col] = 0;
    }
  }
  return matrix;
}
function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder) {
  const stack = [[startRow, startCol]];
  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;
    const alreadyVisited = onesConnectedToBorder[currentRow][currentCol];
    if(alreadyVisited) continue;
    onesConnectedToBorder[currentRow][currentCol] = true;
    const neighbours = getNeighbour(matrix, currentRow, currentCol);
    for(let neighbour of neighbours) {
      const [row, col] = neighbour;
      if(matrix[row][col] !== 1) continue;
      stack.push(neighbour);
    }
  }
}
function getNeighbour(matrix, row, col) {
  const neighbours = [];
  const numRow = matrix.length;
  const numCol = matrix[row].length;
  if(row - 1 >= 0) neighbours.push([row - 1, col]);
  if(row + 1 < numRow) neighbours.push([row + 1, col]);
  if(col - 1 >= 0) neighbours.push([row, col - 1]);
  if(col + 1 < numCol) neighbours.push([row, col + 1]);
  return neighbours;
}


// Method 2:

function removeIslands(matrix) {
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if(!isBorder) continue;
      if(matrix[row][col] !== 1) continue;
      changeOnesConnectedToBorderToTwos(matrix, row, col);
    }
  }
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++) {
      const color = matrix[row][col];
      if(color === 1) {
        matrix[row][col] = 0;
      } else if(color === 2) {
        matrix[row][col] = 1;
      }
    }
  }
  return matrix;
}
function changeOnesConnectedToBorderToTwos(matrix, startRow, startCol) {
  const stack = [[startRow, startCol]];
  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;
    matrix[currentRow][currentCol] = 2;
    const neighbours = getNeighbour(matrix, currentRow, currentCol);
    for(let neighbour of neighbours) {
      const [row, col] = neighbour;
      if(matrix[row][col] !== 1) continue;
      stack.push(neighbour);
    }
  }
}
function getNeighbour(matrix, row, col) {
  const neighbours = [];
  const numRow = matrix.length;
  const numCol = matrix[row].length;
  if(row - 1 >= 0) neighbours.push([row - 1, col]);
  if(row + 1 < numRow) neighbours.push([row + 1, col]);
  if(col - 1 >= 0) neighbours.push([row, col - 1]);
  if(col + 1 < numCol) neighbours.push([row, col + 1]);
  return neighbours;
}
