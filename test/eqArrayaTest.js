//TEST CODE
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([6, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 8,3]), false);
