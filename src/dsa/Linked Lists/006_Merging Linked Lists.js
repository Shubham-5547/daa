// You're given two Linked Lists of potentially unequal length. These Linked Lists potentially merge at a shared intersection node. 
// Write a function that returns the intersection node or returns None / null if there is no intersection.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

// Note: Your function should return an existing node. It should not modify either Linked List, and it should not create any new Linked Lists.



// Method 1 :

// time O(m + n) | space O(n)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const listOneNodes = new Set();
  let currentNodeOne = linkedListOne;
  while(currentNodeOne !== null) {
    listOneNodes.add(currentNodeOne);
    currentNodeOne = currentNodeOne.next;
  }
  let currentNodeTwo = linkedListTwo;
  while(currentNodeTwo !== null) {
    if(listOneNodes.has(currentNodeTwo)) {
      return currentNodeTwo;
    }
    currentNodeTwo = currentNodeTwo.next;
  }
  return null;
}


// Method 2:

// time O(m + n) | space O(1)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currentNodeOne = linkedListOne;
  let countOne = 0;
  while (currentNodeOne !== null) {
    countOne++;
    currentNodeOne = currentNodeOne.next;
  }
  let currentNodeTwo = linkedListTwo;
  let countTwo = 0;
  while (currentNodeTwo !== null) {
    countTwo++;
    currentNodeTwo = currentNodeTwo.next;
  }
  const difference = Math.abs(countTwo - countOne);
  let biggerCurrentNode = countOne > countTwo ? linkedListOne : linkedListTwo;
  let smallerCurrentNode = countOne > countTwo ? linkedListTwo : linkedListOne;
  for(let i = 0; i < difference; i++) {
    biggerCurrentNode = biggerCurrentNode.next;
  }
  while (biggerCurrentNode !== smallerCurrentNode) {
    biggerCurrentNode = biggerCurrentNode.next;
    smallerCurrentNode = smallerCurrentNode.next;
  }
  return biggerCurrentNode;
}



// Method 3:

// time O(m + n) | space O(1)


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currentNodeOne = linkedListOne;
  let currentNodeTwo = linkedListTwo;
  while(currentNodeOne !== currentNodeTwo) {
    if(!currentNodeOne) {
      currentNodeOne = linkedListTwo;
    } else {
      currentNodeOne = currentNodeOne.next;
    }
    if(!currentNodeTwo) {
      currentNodeTwo = linkedListOne;
    } else {
      currentNodeTwo = currentNodeTwo.next;
    }
  }
  return currentNodeOne;
}
