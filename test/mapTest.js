const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');
let words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]) , [ 'g', 'c', 't', 'm', 't' ]);
let words1 = ["ground", ["control", "to"], "major", "tom"];
assertArraysEqual(map(words1, word => word[0]) , [ 'g', 'c', 't', 'm', 't' ]);
