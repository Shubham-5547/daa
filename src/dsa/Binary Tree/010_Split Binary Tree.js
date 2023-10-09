// Write a function that takes in a Binary Tree with at least one node and checks if that Binary Tree can be split into two Binary Trees of equal sum by removing a single edge. 
// If this split is possible, return the new sum of each Binary Tree, otherwise return 0. 
// Note that you do not need to return the edge that was removed.

// The sum of a Binary Tree is the sum of all values in that Binary Tree.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.


// timeO(n) | space O(h)

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function splitBinaryTree(tree) {
  const desiredSubtreeSum = getTreeSum(tree) / 2;
  const canBeSplit = trySubtrees(tree, desiredSubtreeSum)[1];
  return canBeSplit ? desiredSubtreeSum : 0;
}

function trySubtrees(tree, desiredSubtreeSum) {
  if (tree === null) return [0, false];
  const [leftSum , leftCanBeSplit] = trySubtrees(tree.left, desiredSubtreeSum);
  const [rightSum, rightCanBeSplit] = trySubtrees(tree.right, desiredSubtreeSum);

  const currentTreeSum = tree.value + leftSum + rightSum;
  const canBeSplit = leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubtreeSum;
  return [currentTreeSum, canBeSplit];
}

function getTreeSum(tree) {
  if(tree === null) return 0;
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right);
}
