// Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.


// time O(n) | space (d)

function invertBinaryTree(tree) {
  if (tree === null) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}
function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
