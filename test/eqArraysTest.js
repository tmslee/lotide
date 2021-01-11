let assert = require('chai').assert;
let lotide = require('../index');

describe('#eqArrays', ()=>{
  it('two identically arrays should return true', ()=>{
    assert.strictEqual(lotide.eqArrays([1,2,3],[1,2,3]), true);
  });
  it('work with empty array', ()=>{
    assert.strictEqual(lotide.eqArrays([],[]), true);
    assert.strictEqual(lotide.eqArrays([1,2], []), false);
  });
  it('work with arrays of different length', ()=>{
    assert.strictEqual(lotide.eqArrays([1,2,3],[1]), false);
    assert.strictEqual(lotide.eqArrays([1,2,3],[1,2,3,4]), false);
  });
  it('work with arrays of different type', ()=>{
    assert.strictEqual(lotide.eqArrays([1,'2',3],[1,'2',3]), true);
    assert.strictEqual(lotide.eqArrays([1,2,3],['1','2','3']), false);
  });
  it('work with identical array in quotes', ()=>{
    assert.strictEqual(lotide.eqArrays([1,2,3],'[1,2,3]'), false);
  });
  it('work with nested arrays', ()=>{
    assert.strictEqual(lotide.eqArrays([1, 2, 3, [4,5,6], [[7,8,9],[10],[11,12], 13, 14]], [1, 2, 3, [4,5,6], [[7,8,9],[10],[11,12], 13, 14]]), true);
    assert.strictEqual(lotide.eqArrays([1, 2, 3, [4,5,6], [[7,8,9],[10],[11,12], 13, 14]], [1, 2, 3, [4,5,6], [[7,8,500],[10],[11,12], 13, 14]]), false);
  });
});
