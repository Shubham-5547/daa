// Write a function that takes in a Binary Tree and returns if that tree is symmetrical. 
// A tree is symmetrical if the left and right subtrees are mirror images of each other.

// Each BinaryTree node has an integer value, a left child node, and a right child node. 
// Children nodes can either be BinaryTree nodes themselves or None / null.


// time O(n) | space O(h)

// Method 1:

function symmetricalTree(tree) {
  const stackLeft = [tree.left];
  const stackRight = [tree.right];
  while (stackLeft.length > 0) {
    const left = stackLeft.pop();
    const right = stackRight.pop();
    if(left === null && right === null) continue;
    if(left === null || right === null || left.value !== right.value) {
      return false
    }
    stackLeft.push(left.left);
    stackLeft.push(left.right);
    stackRight.push(right.right);
    stackRight.push(right.left);
  }
  return true;
}

// Method 2:

function symmetricalTree(tree) {
  return treesAreMirrored(tree.left, tree.right);
}

function treesAreMirrored(left, right) {
  if(left !== null && right !== null && left.value === right.value) {
    return treesAreMirrored(left.left, right.right) && treesAreMirrored(left.right, right.left);
  }
  return left === right;
}
