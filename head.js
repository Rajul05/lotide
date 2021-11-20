const head = function (arr) {
  if(arr.length === 0){
    return undefined;
  }
  console.log(arr[0]);
  let x = arr[0];
  return x;
  
}
head([9,4,5,6,7]);
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) { 
    console.log("Assertion Passed:" + actual + " === " + expected);
  }
  else { 
    console.log("Assertion Failed:" + actual + " !== " + expected);
  }
};
// TEST CODE
assertEqual(head(["Lighthouse Labs", "Bootcamp"]),"Lighthouse Labs");
assertEqual(head([5,6,7]), 5);
