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

const eqObjects = function(object1, object2) {
  let keysArray1 = Object.keys(object1);
  let keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }
  for (let key1 of keysArray1) {
    if (Array.isArray(object1[key1])) {
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// console.log(eqObjects(ab, ba));

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); //=> true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false