const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(string) {
  let sentence = string.split(' ').join('');
  let letterCount = {};
  for (let letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

const testCase = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
};

console.log("-------test-------");
console.log(countLetters("lighthouse in the house"));
console.log(testCase);
assertEqual(countLetters("lighthouse in the house"), testCase);