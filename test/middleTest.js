const middle = require('../middle');
/* below commented code for testing without mocha chai module*/
//const assertArraysEqual = require('../assertArraysEqual');
// const mid = [1,2,3,4,5];
// assertArraysEqual(middle(mid), [3]);3
// const mid1 = [1,2,3,4,5,6];
// assertArraysEqual(middle(mid1), [3,4]);
const assert = require('chai').assert;
describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns '[3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]); 
  });
});
