// TEST CODE
const assertEqual = require('../assertEqual');
const head = require('../head');
assertEqual(head(["Lighthouse Labs", "Bootcamp"]),"Lighthouse Labs");
assertEqual(head([5,6,7]), 5);
