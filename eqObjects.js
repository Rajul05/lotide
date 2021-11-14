// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) { 
      console.log("Assertion Passed:" + actual + " === " + expected);
    }
    else { 
      console.log("Assertion Failed:" + actual + " !== " + expected);
    }
  };
  const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length){
    console.log('false');
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log('false');
      return false;
    }
  }
  
    console.log('true');
    return true;
};

const eqObjects = function (object1 , object2){
  if (Object.keys(object1).length === Object.keys(object2).length){
    const keysObj = Object.keys(object1);
    for (var items of keysObj){
      if(Array.isArray(object1[items]) || Array.isArray(object2[items])){
     // console.log("going for Nested check:" + object1[items] + object2[items]);
      if(!eqArrays(object1[items], object2[items])){
      console.log('false');
      return false;
      }
      else{}
    }
    else{
        if(object1[items] !== object2[items]){
          console.log('false');
          return false;
        }
    }
    //when array within values are checked
    
  }console.log('true');
  return true;
}  

};
//test code
/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
