const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`👌👌👌 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([]), undefined);
assertEqual(head([3434]), 3434);
assertEqual(head(['a', 'b', 12]), 'a');