let assert = require('chai').assert;
let lotide = require('../index');

const test1 = [];
const test2 = ['a', 'b', 'c', 'd'];
const test3 = ['', '', ''];
const words = ["ground", "control", "to", "major", "tom"];

describe('#map', ()=>{
  it('works with empty array', ()=>{
    assert.deepEqual(lotide.map(test1, word=>word[0]), []);
  });
  it('works array of single letter strings', ()=>{
    assert.deepEqual(lotide.map(test2, word=>word[0]), ['a', 'b', 'c', 'd']);
  });
  it('works with array of empty strings', ()=>{
    assert.deepEqual(lotide.map(test3, word=>word[0]), [undefined, undefined, undefined]);
  });
  it('works with array of strings longer than single letter' , ()=>{
    assert.deepEqual(lotide.map(words, word=>word[0]), ['g', 'c','t','m','t']);
  });
});