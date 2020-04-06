const assertEqual = function(actual, expected) {
  if ((actual === expected) === true) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(object, value) {
  let key;
  let keysArray = Object.keys(object)
  let valuesArray = Object.values(object)
  for (let i = 0; i < keysArray.length; i++) {
    if (valuesArray[i] === value) {
      key = keysArray[i];
    }
  }
  return key;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const planetMoons = {
  earth: 1,
  pluto: undefined,
  planetArray: [1, 3]
}

// console.log("---------Tests----------");
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(planetMoons, 1), "earth");
// // assertEqual(findKeyByValue(planetMoons, [1, 3]), "planetArray"); // I'll sort this out later.......... stretch for me
