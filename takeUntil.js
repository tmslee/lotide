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

const takeUntil = function(array, callback) {
  let ans = [];
  for(let elem of array){
    if(callback(elem)) break;
    else ans.push(elem);
  }
  return ans;
}

const test1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const test2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(test1, x=>x<0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(test2, x=>x===','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);