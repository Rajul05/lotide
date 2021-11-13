const eqArrays = function(array1, array2) {
    let c = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        c++;
      }
      else {
        console.log('false');
        return false;
      }
    }
    if (c === array1.length) {
      console.log('true');
      return true;
    }
};
const assertArraysEqual = function(array1, array2) {
    let c = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        c++;
      }
      else {
        console.log("Assertion Failed:[" + array1 + "] !== [" + array2 + "]");
      }
    }
    if (c === array1.length) {
      console.log("Assertion Passed:[" + array1 + "] === [" + array2 + "]");
    }
};
const middle = function(array) {
  const middleElement = [];
  if ( array.length % 2 == 0) {
  middleElement.push(array[Math.floor((array.length - 1) / 2)]);
  middleElement.push(array[Math.floor((array.length) / 2)]);
  }
  else {
    middleElement.push(array[Math.floor((array.length - 1) / 2)]);
  }
  return middleElement;
}
middle([1,2,3,4,5]);
middle([1,2,3,4,5,6]);
const mid = [1,2,3,4,5];
assertArraysEqual(middle(mid), [3]);3
const mid1 = [1,2,3,4,5,6];
assertArraysEqual(middle(mid1), [3,4]);