// The distance between a node in a Binary Tree and the tree's root is called the node's depth.

// Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

// time O(n) | space O(h)

// Method 1 :

function nodeDepths(root) {
  let sumOfDepths =  0;
  const stack = [{node: root, depth: 0}];
  while (stack.length > 0) {
    const {node, depth} =stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return sumOfDepths;
}


// Mehtod 2:

function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}
