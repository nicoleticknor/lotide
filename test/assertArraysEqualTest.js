const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 7, 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([], "");
assertArraysEqual([undefined, 2], [undefined, 2]);
assertArraysEqual([NaN, 2], [NaN, 2]);
assertArraysEqual(["Lighthouse Labs", "Bootcamp", "Hello"], ["Lighthouse Labs", "Bootcamp", "Hello"]);