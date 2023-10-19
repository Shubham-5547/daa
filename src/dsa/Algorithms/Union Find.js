// The union-find data structure is similar to a traditional set data structure in that it contains a collection of unique values. 
// However, these values are spread out amongst a variety of distinct disjoint sets, meaning that no set can have duplicate values, 
// and no two sets can contain the same value. 

// Write a UnionFind class that implements the union-find (also called a disjoint set) data structure. This class should support three methods:

// 1. createSet(value): Adds a given value in a new set containing only that value.

// 2. union (valueOne, valueTwo): Takes in two values and determines which sets they are in. 
// If they are in different sets, the sets are combined into a single set. 
// If either value is not in a set or they are in the same set, the function should have no effect.

// 3. find (value): Returns the "representative" value of the set for which a value belongs to. 
// This can be any value in the set, but it should always be the same value, regardless of which value in the set find is passed. 
// If the value is not in a set, the function should return null/None. Note that after a set is part of a union, its representative can potentially change.

// You can assume createSet will never be called with the same value twice.

// If you're unfamiliar with Union Find, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.


// Method 1:

class UnionFind {
  constructor() {
    this.parents = {};
  }

// time O(1) | space O(1)

  createSet(value) {
    this.parents[value] = value;
  }

// time O(n) | space O(1)

  find(value) {
    if(!(value in this.parents)) return null;
    
    let currentParent = value;
    while (currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent];
    }
    return currentParent;
  }

// time O(n) | space O(1)

  union(valueOne, valueTwo) {
    if(!(valueOne in this.parents) || !(valueTwo in this.parents)) return;
    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    this.parents[valueTwoRoot] = valueOneRoot;
  }
}




// Method 2:

class UnionFind {
  constructor() {
    this.parents = {};
    this.ranks = {};
  }

// time O(1) | space O(1)

  createSet(value) {
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

// time O(logn) | space O(1)

  find(value) {
    if(!(value in this.parents)) return null;
    
    let currentParent = value;
    while (currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent];
    }
    return currentParent;
  }

// time O(logn) | space O(1)

  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return;
    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    if(this.ranks[valueOneRoot] < this.ranks[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot;
    } else if (this.ranks[valueOneRoot] > this.ranks[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot;
    } else {
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueOneRoot] += 1;
    }
  }
}


// Method 3:

class UnionFind {
  constructor() {
    this.parents = {};
    this.ranks = {};
  }

// time O(1) | space O(1)

  createSet(value) {
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

// time O(α(n)) Approx O(1) | space O(1)

  find(value) {
    if(!(value in this.parents)) return null;
    
    if(value !== this.parents[value]) {
      this.parents[value] = this.find(this.parents[value]);
    }
    return this.parents[value];
  }

// time O(logn) | space O(1)

  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return;
    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    if(this.ranks[valueOneRoot] < this.ranks[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot;
    } else if (this.ranks[valueOneRoot] > this.ranks[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot;
    } else {
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueOneRoot] += 1;
    }
  }
}
