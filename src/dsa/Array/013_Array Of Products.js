// Write a function that takes in a non-empty array of integers and returns an array of the same length, 
// where each element in the output array is equal to the product of every other number in the input array.

// In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

// Note that you're expected to solve this problem without using division.


// Method 1:

function arrayOfProducts(array) {
  const products = [];
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j =0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  return products;
}


// Method 2:

// time O(n) | space O(n)

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
  const leftProduct = new Array(array.length).fill(1);
  const rightProduct = new Array(array.length).fill(1);
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProduct[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    rightProduct[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  for (let i = 0; i< array.length; i++) {
    products[i] = leftProduct[i] * rightProduct[i];
  }
  return products;
}


// Method 3:

// time O(n) | space O(n)

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
  
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  return products;
}
