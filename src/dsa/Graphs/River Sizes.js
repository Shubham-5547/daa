// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only sand 1 s. 
// Each represents land, and each 1 represents part of a river. A river consists of any number of 1 s that are either horizontally 
// or vertically adjacent (but not diagonally adjacent). The number of adjacent 1 s forming a river determine its size.

// Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

// Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.


// time O(wh) | space O(wh)

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map(row => row.map(value => false));
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodeToExplore = [[i, j]];
  while (nodeToExplore.length) {
    const currentNode = nodeToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if(visited[i][j]) continue;
    visited[i][j] = true;
    if(matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unVisitedNeighbours = getUnVisitedNeighbours(i, j, matrix, visited);
    for(const neighbour of unVisitedNeighbours) {
      nodeToExplore.push(neighbour);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnVisitedNeighbours(i, j, matrix, visited) {
  const unVisitedNeighbour = [];
  if(i > 0 && !visited[i - 1][j]) {
    unVisitedNeighbour.push([i - 1, j]);
  }
  if(i < matrix.length - 1 && !visited[i + 1][j]) {
    unVisitedNeighbour.push([i + 1, j]);
  }
  if(j > 0 && !visited[i][j - 1]) {
    unVisitedNeighbour.push([i, j - 1]);
  }
  if(j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unVisitedNeighbour.push([i, j + 1]);
  }
  return unVisitedNeighbour;
}
