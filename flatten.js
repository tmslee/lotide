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

const flatten = arr => {
  let ans = [];
  for (let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      ans = [...ans, ... arr[i]];
    }
    else ans.push(arr[i]);
  }
  return ans;
}

const flattenRecursion = arr => {
  let ans = [];
  for(let elem of arr){
    if (Array.isArray(elem)) {
      ans = [...ans, ...flattenRecursion(elem)];
    }
    else ans.push(elem);
  }
  return ans;
}

assertArraysEqual(flatten([1,2,3,[4,5], [6,7]]), [1,2,3,4,5,6,7]);
assertArraysEqual(flatten([[1],[2],[3],[4]]), [1,2,3,4]);
assertArraysEqual(flatten([],[],[],[]), []);
assertArraysEqual(flatten([1,2,3,4,5]), [1,2,3,4,5]);

assertArraysEqual(flattenRecursion([1,2,3,[4,5], [6,7], [[[8,9,10],[11],12,13],[[14]],15, 16, [[17,18,19],[20],[21,22]]]]), [1,2,3,4,5,6,7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22]);
assertArraysEqual(flattenRecursion([[1],[2],[3],[4]]), [1,2,3,4]);
assertArraysEqual(flattenRecursion([],[],[],[]), []);
assertArraysEqual(flattenRecursion([1,2,3,4,5]), [1,2,3,4,5]);