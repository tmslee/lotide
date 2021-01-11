const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`🐢🐢🐢 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🍎🍎🍎 Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

module.exports = assertEqual;