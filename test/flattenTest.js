let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('works with nesting of varying size and depth', ()=>{
    assert.deepEqual(lotide.flatten([1,2,3,[4,5], [6,7]]), [1,2,3,4,5,6,7]);
  });
  it('works with single length arrays as elements', ()=>{
    assert.deepEqual(lotide.flatten([[1],[2],[3],[4]]), [1,2,3,4]);
  });
  it('works with empty nesting', ()=>{
    assert.deepEqual(lotide.flatten([],[],[],[]), []);
  });
  it('works with no nesting', ()=>{
    assert.deepEqual(lotide.flatten([1,2,3,4,5]), [1,2,3,4,5]);
  });
});