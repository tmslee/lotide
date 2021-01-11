let assert = require('chai').assert;
let lotide = require('../index');

let testArr;

describe('#tail', ()=>{
  it('should return ["a", "b", "c", "d"] when input is ["a","a","b","c","d"] and the original array must be unchanged', ()=>{
    testArr = ['a', 'a', 'b', 'c', 'd'];
    assert.deepEqual(tail(testArr), ['a', 'b', 'c', 'd']);
    assert.deepEqual(testArr, ['a', 'a', 'b', 'c', 'd']);
  });

  it('should return empty array when input is empty, and original array must be unchanged', ()=>{
    testArr = [];
    assert.deepEqual(tail(testArr), []);
    assert.deepEqual(testArr, []);
  });

  it('should reutnr empty array when input has 1 element, and original array must be unchanged', ()=>{
    testArr = [1];
    assert.deepEqual(tail(testArr), []);
    assert.deepEqual(testArr, [1]);
  });
});