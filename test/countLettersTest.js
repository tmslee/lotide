let assert = require('chai').assert;
let lotide = require('../index');

let counts = lotide.countLetters('lighthouse in the house');

describe('#countLetters', ()=>{
  it('should be 1 l', ()=>{
    assert.strictEqual(counts.l, 1);
  });
  it('should be 2 i', ()=>{
    assert.strictEqual(counts.i, 2);
  });
  it('should be 1 g', ()=>{
    assert.strictEqual(counts.g, 1);
  });
  it('should be 4 h', ()=>{
    assert.strictEqual(counts.h, 4);
  });
  it('should be 2 t', ()=>{
    assert.strictEqual(counts.t, 2);
  });
});