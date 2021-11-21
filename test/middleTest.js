const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const mid = [1,2,3,4,5];
assertArraysEqual(middle(mid), [3]);3
const mid1 = [1,2,3,4,5,6];
assertArraysEqual(middle(mid1), [3,4]);
