const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2){
  let message = eqArrays(arr1, arr2) ? `👌👌👌 Assertion Passed: ${arr1} === ${arr2}`:`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${arr1} !== ${arr2}`;
  console.log(message);
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const test1 = [];
const test2 = ['a', 'b', 'c', 'd'];
const test3 = ['', '', ''];
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(test1, word=>word[0]), []);
assertArraysEqual(map(test2, word=>word[0]), ['a', 'b', 'c', 'd']);
assertArraysEqual(map(test3, word=>word[0]), [undefined, undefined, undefined]);
assertArraysEqual(map(words, word=>word[0]), ['g', 'c','t','m','t']);