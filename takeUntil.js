const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item in array) {
    if (callback(array[item])) {
      return newArray;
    } else {
      newArray.push(array[item]);
    }
  }
  return newArray;
};

const friends = ["Mario", "Luigi", "Yoshi", "Han Solo", "Tiger King", "Arthas", "Deathwing"];
const friendsList = takeUntil(friends, x => x === "Tiger King");
// console.log(friendsList);

const gasPrices = [135.9, 144.9, 125.9, 134.9, 119.9, 104.9, 98.9];
const gasPricesList = takeUntil(gasPrices, x => x < 120);
// console.log(gasPricesList);

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

// assertArraysEqual(friendsList, ['Mario', 'Luigi', 'Yoshi', 'Han Solo']);
// assertArraysEqual(gasPricesList, [135.9, 144.9, 125.9, 134.9]);