const words1 = ["commencing", "countdown", "engines", "on"];
const words2 = ["check", "ignition", "and"];
const words3 = ["don't", "believe", "in", "modern", "love"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));    
  }
  return results;
};

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word.length);
const results3 = map(words3, word => word.toUpperCase());

// console.log(results1);

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

assertArraysEqual(results1, ['c', 'c', 'e', 'o']);
assertArraysEqual(results2, [5, 8, 3]);
assertArraysEqual(results3, ["DON'T", "BELIEVE", "IN", "MODERN", "LOVE"]);