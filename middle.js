const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length){
    //console.log('false');
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //console.log('false');
      return false;
    }
  }
  //console.log('true');
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { 
    console.log("Assertion Passed:" + array1 + " === " + array2);
  }
  else { 
    console.log("Assertion Failed:" + array1 + " !== " + array2);
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
module.exports = middle;
