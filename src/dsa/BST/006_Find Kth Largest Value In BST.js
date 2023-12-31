// Write a function that takes in a Binary Search Tree (BST) and a positive integer k and returns the kth largest integer contained in the BST.
// You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree.
// Also, for the purpose of this question, duplicate integers will be treated as distinct values. In other words, the second largest value in a BST containing values {5, 7, 7} will be 7-not 5.

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: 
// its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

// Method 1:

// time O(n) | space O(n)

function findKthLargestValueInBst(tree, k) {
  let sortedNodeValues = [];
  inOrderTraverse(tree, sortedNodeValues);
  return sortedNodeValues[sortedNodeValues.length - k];
}

function  inOrderTraverse(node, sortedNodeValues) {
  if(node === null) return;
  inOrderTraverse(node.left, sortedNodeValues);
  sortedNodeValues.push(node.value);
  inOrderTraverse(node.right, sortedNodeValues);
}


// Method 2:

class TreeInfo {
  constructor(numberOfNodesVisited, lastestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = lastestVisitedNodeValue;
  }
}

function findKthLargestValueInBst(tree, k) {
  const treeInfo =  new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
}

function  reverseInOrderTraverse(node, k, treeInfo) {
  if(node === null || treeInfo.numberOfNodesVisited >= k) return;
  reverseInOrderTraverse(node.right, k, treeInfo);
  if(treeInfo.numberOfNodesVisited < k ) {
    treeInfo.numberOfNodesVisited += 1;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo);
  }
}
