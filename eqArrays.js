// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("true");
  }
  else {
    console.log("false");
  }
};
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
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([6, 2, 3], [1, 2, 3]), true);
eqArrays([1, 2], [1, 2]); //supposing the arrays to be of equal length
eqArrays([1, 2], [1, 8]);