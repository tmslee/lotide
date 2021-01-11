let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('should work with objects (no nesting no array)', ()=>{
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(lotide.eqObjects(ab,ba), true);
    assert.deepEqual(lotide.eqObjects(ab,abc), false);
  });

  it('should work with objects with arrays and nesting', ()=>{

    const cd1 = { c: "1", d: ["2", 3, 4] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const cd3 = { c: "1", d: ["2", 4] };
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
    
    let nestObj3 = {
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
    assert.deepEqual(lotide.eqObjects(cd1,cd2), true);
    assert.deepEqual(lotide.eqObjects(cd1,cd3), false);
    assert.deepEqual(lotide.eqObjects(nestObj1,nestObj2), false);
    assert.deepEqual(lotide.eqObjects(nestObj1,nestObj3), true);
  });
});