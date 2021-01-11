let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('works with empty imputs no nesting', ()=>{
    assert.deepEqual(lotide.without([], []), []);
    assert.deepEqual(lotide.without([], [1, 0, -1, '2', 'three']), []);
    assert.deepEqual(lotide.without([1, 0, -1, '2', 'three', 4, 5, 'six', 'seven', 4, 5], []), [1, 0, -1, '2', 'three', 4, 5, 'six', 'seven', 4, 5]);
  });
  it('works with duplicate elements no nesting', ()=>{
    assert.deepEqual(lotide.without([1, 0, -1, '2', 'three', 1, 0, 0, 0, 'three'], [1, 0, -1, '2', 'three']), []);
    assert.deepEqual(lotide.without([1, 0, -1, '2', 'three', 4, 5, 'six', 'seven', 4, 5], [1, 0, -1, '2', 'three']), [4, 5, 'six', 'seven', 4, 5]);
  });

  it('works with empty imputs wtih nesting', ()=>{
    assert.deepEqual(lotide.without([[],[[],[]]], [[],[[],[]]]), []);
    assert.deepEqual(lotide.without([[],[[],[]]], [[1, 2],[[1],['one','two'], 'two']]), []);
    assert.deepEqual(lotide.without([[1, 2],[[1],['one','two'], 'two']], [[],[[],[]]]), [[1, 2],[[1],['one','two'], 'two']]);
  });
  it('works with duplicate elements with nesting', ()=>{
    assert.deepEqual(lotide.without([[1, 2],[[1],['one','two'], 'two']], [[2, 2],[[1],['one','two']]]), []);
    assert.deepEqual(lotide.without([[1, 2],[[1],['one','two'], 'two']], [[1],[[1],['one', 1], 'one']]), [[2],[['two'], 'two']]);
  });
});
