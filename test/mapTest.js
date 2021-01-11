let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});

const test1 = [];
const test2 = ['a', 'b', 'c', 'd'];
const test3 = ['', '', ''];
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(test1, word=>word[0]), []);
assertArraysEqual(map(test2, word=>word[0]), ['a', 'b', 'c', 'd']);
assertArraysEqual(map(test3, word=>word[0]), [undefined, undefined, undefined]);
assertArraysEqual(map(words, word=>word[0]), ['g', 'c','t','m','t']);