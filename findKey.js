function findKey(object, callback){
  
 // console.log(Object.keys(object).find(callback.object));
  let objKeys = Object.keys(object);
  
  for (let key of objKeys){
    if (callback(object[key])) {
      //console.log(key);
      return key;
    }  
  }
  return undefined;
}
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


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
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
