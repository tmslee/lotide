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

const middle = function(arr){
  if(arr.length  < 3) return [];
  else{
    let mid = Math.ceil(arr.length/2) - 1;
    let even = arr.length % 2 === 0; 
    return even ? arr.slice(mid, mid+2) : arr.slice(mid, mid+1);
  }
}

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle(['a','b','c','d','e','f']), ['c', 'd']);