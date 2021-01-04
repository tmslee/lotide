const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`👌👌👌 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

const tail = arr => arr.slice(1);

let testArr;
testArr = ['a', 'a', 'b', 'c', 'd'];
//testArr = [];
//testArr = [1];

let beforeTailLen = testArr.length;
const res = tail(testArr);

assertEqual(res.length, Math.max(0, testArr.length - 1));
assertEqual(testArr.length, beforeTailLen);
for (let i = 0; i < res.length; i++) {
  assertEqual(res[i], testArr[i + 1]);
}