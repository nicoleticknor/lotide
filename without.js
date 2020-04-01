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

const without = function(source, itemsToRemove) {
  if (Array.isArray(source) || Array.isArray(itemsToRemove)) {
    let arrayWithout = [];
    for (let item of source) {
      for (let i = 0; i < itemsToRemove.length; i++) {
        if (itemsToRemove[i] !== item) {
          arrayWithout.push(item);
        }
      }
    }
    return arrayWithout;
  }
};

const words = [1, 2, "lighthouse"];
without(words, []);
assertArraysEqual(words, [1, 2, "lighthouse"]);