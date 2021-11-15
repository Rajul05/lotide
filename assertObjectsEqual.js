const assertObjectsEqual = function(actual, expected) {
    
  if (Object.keys(actual).length === Object.keys(expected).length){
      //get object keys
    const keysObj = Object.keys(actual);
    const inspect = require('util').inspect;
    //loop through object and compare 2 objects
    for (var items of keysObj){
        //check if object value is an array and if true, compare array elements
      if(Array.isArray(actual[items]) || Array.isArray(expected[items])){
             
     if ((actual[items]).length !== (expected[items]).length) {
       console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
       return false;
      }
      for (let i = 0; i < actual[items].length; i++) {
          if (inspect(actual)[i] !== inspect(expected)[i]) {
         console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
          return false;
        }
      }
      
      }
     else{
        if(actual[items] !== expected[items]){
          console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
          return false;
        }
    }
        
  }
  console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return true;
}  

};
const eqObjects = function (object1 , object2){
  if (Object.keys(object1).length === Object.keys(object2).length){
    const keysObj = Object.keys(object1);
    for (var items of keysObj){
      if(Array.isArray(object1[items]) || Array.isArray(object2[items])){
     // console.log("going for Nested check:" + object1[items] + object2[items]);
      if(!assertObjectsEqual(object1[items], object2[items])){
      //console.log('false');
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
        
  }
  console.log('true');
  return true;
}  

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(eqObjects(cd, cd2));
assertObjectsEqual(cd, cd2);
assertObjectsEqual(cd, dc);
