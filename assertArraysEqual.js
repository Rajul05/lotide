const assertArraysEqual = function(array1, array2) {
  let c = 0;
  if (array1.length !== array2.length){
    return false;
  }
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
assertArraysEqual([1, 2], [1, 2]); //supposing the arrays to be of equal length
assertArraysEqual([1, 2], [1, 8]);
