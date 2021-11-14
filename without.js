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
  
const without = function(array1, array2) {
  let newArray = array1;
  for (let i = 0; i <array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array1[j] === array2[i]) {
        newArray.splice(j,1);
      }
    }
  }
};
without([1,2,3,4], [4,3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
