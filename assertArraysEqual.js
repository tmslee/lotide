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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], []);
assertArraysEqual([1, 2, 3], [1]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [0, 2, 3]);
assertArraysEqual([1, 2, 3], ['1', '2', '3']);
assertArraysEqual([1, 2, 3], '[1, 2, 3]');