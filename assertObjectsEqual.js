const lotide = require('./index');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = lotide.eqObjects(actual, expected) ? `🐢🐢🐢Assertion passed: ${inspect(actual)} === ${inspect(expected)}` : `🍎🍎🍎Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(message);
};

module.exports = assertObjectsEqual;

