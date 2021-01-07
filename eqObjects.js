const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`👌👌👌 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keyList1 = Object.keys(object1);
  let keyList2 = Object.keys(object2);
  if (keyList1.length !== keyList2.length) return false;
  else{
    for(let key of keyList1){
      if (!object2[key]) return false;
      else {
        let val1 = object1[key];
        let val2 = object2[key];
        if (val1 instanceof Array && val2 instanceof Array) {
          if (!eqArrays(val1, val2)) return false;
        }
        else if(typeof val1 === typeof val2 && typeof val1 === 'object'){
          if(!eqObjects(val1, val2)) return false;
        }
        else if(val1 !== val2) return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

let nestObj1 = {
  a: "level1",
  b: [1,2,3],
  c: ["1", "2"],
  d:{
    e:"level2",
    f: [1,2,3],
    g:{
      h:"level3",
      i:[2,3,4],
      j:["a", "b", "c"],
      k: 17
    }
  }
};
let nestObj2 = {
  a: "level1",
  b: [1,2,3],
  c: ["1", "2"],
  d:{
    e:"level2",
    f: [1,2,3],
    g:{
      h:"level3",
      i:[2,3,500],
      j:["a", "b", "c"],
      k: 17
    }
  }
};
assertEqual(eqObjects(nestObj1, nestObj2), false); // => false

nestObj2 = {
  a: "level1",
  b: [1,2,3],
  c: ["1", "2"],
  d:{
    e:"level2",
    f: [1,2,3],
    g:{
      h:"level3",
      i:[2,3,4],
      j:["a", "b", "c"],
      k: 17
    }
  }
};
assertEqual(eqObjects(nestObj1, nestObj2), true); // => true