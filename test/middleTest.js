const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3,]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, undefined, 3, 4]), [undefined, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);