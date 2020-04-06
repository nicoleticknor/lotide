const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 7, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], ""), true);
assertEqual(eqArrays([undefined, 2], [undefined, 2]), true);
assertEqual(eqArrays([NaN, 2], [NaN, 2]), true);
assertEqual(eqArrays(["Lighthouse Labs", "Bootcamp", "Hello"], ["Lighthouse Labs", "Bootcamp", "Hello"]), true);
