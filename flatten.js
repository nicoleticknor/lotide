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

const flatten = function(arrayWithOtherArrays) {
  let flatArray = [];
  for (let element of arrayWithOtherArrays) {
    if(Array.isArray(element)) {
      for (let item in element) {
        flatArray.push(element[item]);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

// let testOne = flatten([1, 2, [3, 4], 5, [6]]);
// let testTwo = flatten([[], 1, 2, [undefined, 3]]);
// let testThree = flatten([1, "2", [3], ["4", 5]]);
// let testFour = flatten([1, [""], 3]);

// assertArraysEqual(testOne, [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(testTwo, [1, 2, undefined, 3]);
// assertArraysEqual(testThree, [1, "2", 3, "4", 5]);
// assertArraysEqual(testFour, [1, '', 3])
