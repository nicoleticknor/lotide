const assertEqual = function(actual, expected) {
  if ((actual === expected) === true) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

