// Given two binary trees, merge them and return the resulting tree. 
// If two nodes overlap during the merger then sum the values, otherwise use the existing node.

// Note that your solution can either mutate the existing trees or return a new tree.


time O(n) | space O(h)

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function mergeBinaryTrees(tree1, tree2) {
  if(tree1 === null) return tree2;
  if(tree2 === null) return tree1;
  tree1.value += tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
  return tree1;
}


Method 2:

function mergeBinaryTrees(tree1, tree2) {
  if(tree1 === null) return tree2;
  const tree1Stack = [tree1];
  const tree2Stack = [tree2];
  while (tree1Stack.length > 0) {
    const tree1Node = tree1Stack.pop();
    const tree2Node = tree2Stack.pop();
    if (tree2Node === null) continue;
    tree1Node.value += tree2Node.value;

    if(tree1Node.left === null) {
      tree1Node.left = tree2Node.left;
    } else {
      tree1Stack.push(tree1Node.left);
      tree2Stack.push(tree2Node.left);
    }
    if(tree1Node.right === null) {
      tree1Node.right = tree2Node.right;
    } else {
      tree1Stack.push(tree1Node.right);
      tree2Stack.push(tree2Node.right);
    }
  }
  return tree1;
}
