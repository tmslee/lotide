let assert = require('chai').assert;
let lotide = require('../index');

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(lotide.head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", ()=>{
    assert.strictEqual(lotide.head(['5']), '5');
  });

  it("returns 'undefined' for empty array", ()=>{
    assert.strictEqual(lotide.head([]), undefined);
  });

  it("returns 'a' for ['a', 'b', 12]", ()=>{
    assert.strictEqual(lotide.head(['a', 'b', 12]), 'a');
  });
});