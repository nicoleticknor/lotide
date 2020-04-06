const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) { 
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    return false;
  }
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;