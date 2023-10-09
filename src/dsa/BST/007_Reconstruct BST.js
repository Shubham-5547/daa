// The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:

// 1. Current node

// 2. Left subtree

// 3. Right subtree

// Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.
// The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: 
// its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.


// time O(n^2) | space O(h)

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;
  const currentVlaue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;
  for(let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx];
    if(value >= currentVlaue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }
  const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1,rightSubtreeRootIdx));
  const rightSubTree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
  return new BST(currentVlaue, leftSubtree, rightSubTree);
}
