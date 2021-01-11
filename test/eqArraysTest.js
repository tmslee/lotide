let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [0, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
assertEqual(eqArrays([1, 2, 3], '[1, 2, 3]'), false);

assertEqual(eqArrays([1, 2, 3, [4,5,6], [[7,8,9],[10],[11,12], 13, 14]], [1, 2, 3, [4,5,6], [[7,8,9],[10],[11,12], 13, 14]]), true);
assertEqual(eqArrays([1, 2, 3, [4,5,6], [[7,8,9],[10],[11,12], 13, 14]], [1, 2, 3, [4,5,6], [[7,8,500],[10],[11,12], 13, 14]]), false);

