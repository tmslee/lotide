let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});

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