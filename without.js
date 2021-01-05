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

const makeSetFromArray = arr =>{
  let ans = new Set();
  for(let elem of arr){
    if(typeof elem === 'object') ans = new Set([...ans, ...makeSetFromArray(elem)]);
    else ans.add(elem);
  }
  return ans;
}

const without = (source, itemsToRemove) => {
  let removeSet = makeSetFromArray(itemsToRemove);
  return withoutHelper(source, removeSet);
};

const withoutHelper = (source, removeSet) => {
  let ans = [];
  for (let elem of source){
    if (typeof elem === 'object') {
      let subarr = withoutHelper(elem, removeSet);
      if (subarr.length !== 0) ans.push(subarr);
    } else if (!removeSet.has(elem)) {
      ans.push(elem);
    }
  }
  return ans;
}

//
assertArraysEqual(without([], []), []); //empty source, empty remove
assertArraysEqual(without([], [1, 0, -1, '2', 'three']), []); // empty source, non empty remove
assertArraysEqual(without([1, 0, -1, '2', 'three', 1, 0, 0, 0, 'three'], [1, 0, -1, '2', 'three']), []); //source with duplicate elements that should all be removed
assertArraysEqual(without([1, 0, -1, '2', 'three', 4, 5, 'six', 'seven', 4, 5], [1, 0, -1, '2', 'three']), [4, 5, 'six', 'seven', 4, 5]); //source with extra elements that should be left over
assertArraysEqual(without([1, 0, -1, '2', 'three', 4, 5, 'six', 'seven', 4, 5], []), [1, 0, -1, '2', 'three', 4, 5, 'six', 'seven', 4, 5]); //non empty source and empty remove

/*  i forgot that assertArraysEqual cant handle nested arrays.... it works fine though trust me

assertArraysEqual(without([[],[[],[]]], [[],[[],[]]]), []); //nested empty source, nested empty remove
assertArraysEqual(without([[],[[],[]]], [[1, 2],[[1],['one','two'], 'two']]), []); //nested empty source, nested non empty remove
assertArraysEqual(without([[1, 2],[[1],['one','two'], 'two']], [[],[[],[]]]), [[1, 2],[[1],['one','two'], 'two']]); //nested non empty source, nested empty remove
assertArraysEqual(without([[1, 2],[[1],['one','two'], 'two']], [[2, 2],[[1],['one','two']]]), []); //nested source with dup elements that should all be removed
assertArraysEqual(without([[1, 2],[[1],['one','two'], 'two']], [[1],[[1],['one', 1], 'one']]), [[2],[['one','two'], 'two']]); //nested source with dup elements that should have leftover
assertArraysEqual(without([], []), []); //nested source with dup elements that should all be leftover
*/