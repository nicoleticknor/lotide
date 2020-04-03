const findKey = function(object, callback) {
  let key;
  let index;
  let value;
  const keysArray = Object.keys(object);
  const valuesArray = Object.values(object);
  
  const findValue = function(valuesArray, callback) {
    let value;
    for (let i = 0; i < valuesArray.length; i++) {
      if (callback(valuesArray[i])) {
        value = valuesArray[i];
        return value;
      }
    }
  };

  value = findValue(valuesArray, callback);

  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i] === value) {
      index = i;
    }
  }

  key = keysArray[index];
  return key;
};

const assertEqual = function(actual, expected) {
  if ((actual === expected) === true) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");