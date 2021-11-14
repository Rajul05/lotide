const assertArraysEqual = function(array1, array2) {
  let c = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("Assertion Failed:[" + array1 + "] !== [" + array2 + "]");
      return false;
    }
  }
  console.log("Assertion Passed:[" + array1 + "] === [" + array2 + "]");
  return true;
};
assertArraysEqual([1, 2], [1, 2]); //supposing the arrays to be of equal length
assertArraysEqual([1, 2], [1, 8]);
