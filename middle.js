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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

assertArraysEqual(middle([1, 2, 3,]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, undefined, 3, 4]), [undefined, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);