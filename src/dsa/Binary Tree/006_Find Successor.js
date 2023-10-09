// Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.
// A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree-traversal technique. A node has no successor 
// if it's the last node to be visited in the in-order traversal.

// If a node has no successor, your function should return None / null.

// Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.



time O(h) | space O(1)


// Method 1:
function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
  for(let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const currentNode= inOrderTraversalOrder[idx];
    if(currentNode !== node) continue;
    if(idx === inOrderTraversalOrder.length - 1) return null;
    return inOrderTraversalOrder[idx + 1];
  }
}
function getInOrderTraversalOrder(node, order = []) {
  if(node === null) return order;
  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);
  return order;
}


// Method 2:

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if(node.right !== null) {
    return getLeftmostChild(node.right);
  }
  return getRightmostParent(node);
}

function getLeftmostChild(node) {
  let currentNode = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getRightmostParent(node) {
  let currentNode = node;
  while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}
