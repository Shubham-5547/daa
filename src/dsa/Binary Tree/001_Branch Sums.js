// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

// O(n) time | O(n) space

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}
function calculateBranchSums(node, runningSum, sums) {
  if (!node) return;
  const newrunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newrunningSum);
    return;
  }
  calculateBranchSums(node.left, newrunningSum, sums);
  calculateBranchSums(node.right, newrunningSum, sums);

}
