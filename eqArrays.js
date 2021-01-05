const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`👌👌👌 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [0, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
assertEqual(eqArrays([1, 2, 3], '[1, 2, 3]'), false);