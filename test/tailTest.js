const assertEqual = require('../assertEqual');
const tail = require('../tail');

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