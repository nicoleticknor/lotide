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