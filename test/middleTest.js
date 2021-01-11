let assert = require('chai').assert;
let lotide = require('../index');

describe('#middle', ()=>{
  it('should return [] for empty array', ()=>{
    assert.deepEqual(lotide.middle([]),[]);
  });

  it('should return [] for array with 1 element in it', ()=>{
    assert.deepEqual(lotide.middle([1]),[]);
  });

  it('should return [] for array with 2 elements in it', ()=>{
    assert.deepEqual(lotide.middle([1,2]),[]);
  });

  it('should return [2] for input [1,2,3]', ()=>{
    assert.deepEqual(lotide.middle([1,2,3]),[2]);
  });

  it('should return [2,3] for input [1,2,3,4]', ()=>{
    assert.deepEqual(lotide.middle([1,2,3,4]),[2,3]);
  });

  it('should return ["c", "d"] for input ["a", "b", "c", "d", "e", "f"]', ()=>{
    assert.deepEqual(lotide.middle(['a','b','c','d','e','f']),['c', 'd']);
  });
})