let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('passes individual letter check', ()=>{
    let ans = {
      h:[0],
      e:[1],
      l:[2,3],
      o:[4]
    }
    assert.deepEqual(lotide.letterPositions('hello'), ans);
  });
  it('passes empty string', ()=>{
    assert.deepEqual(lotide.letterPositions(''), {});
  });
});



