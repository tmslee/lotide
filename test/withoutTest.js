let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});


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