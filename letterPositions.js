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

const letterPositions = function(str){
  const res = {};
  for(let idx = 0; idx < str.length; idx++){
    let c = str[idx];
    if(c !== " "){
      if(!res[c]) res[c] = [idx];
      else res[c].push(idx); 
    }
  }
  return res;
}

const testRes = letterPositions('hello');
console.log(testRes);
const testAns = {h:[0], e:[1] , l:[2,3], o:[4]};
for(let key in testAns){
  assertArraysEqual(testRes[key], testAns[key]);
}