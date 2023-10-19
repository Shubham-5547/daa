// You're given a Linked List with at least one node. Write a function that returns the middle node of the Linked List. 
// If there are two middle nodes (i.e. an even length list), your function should return the second of these nodes. 
// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.



// time O(n) | space O(1)

// Method 1:

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function middleNode(linkedList) {
  let count = 0;
  let currentNode = linkedList;
  while(currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }
  let middleNode = linkedList;
  for(let i = 0; i < Math.floor(count / 2); i++) {
    middleNode = middleNode.next;
  }
  return middleNode;
}



// Method 2:


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function middleNode(linkedList) {
  let slowNode = linkedList;
  let fastNode = linkedList;
  while(fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  return slowNode;
}
