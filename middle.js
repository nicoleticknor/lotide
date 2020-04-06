const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleElement = [];
  if (array.length < 3) {
    return middleElement;
  }
  if (array.length % 2 === 0) {
    middleElement.push(array[Math.floor(array.length / 2) - 1]);
  } 
  middleElement.push(array[Math.floor(array.length / 2)]);
  return middleElement;
};

module.exports = middle;