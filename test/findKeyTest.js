let assert = require('chai').assert;
let lotide = require('../index');

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const testObj1 = {
  "Blue Hill": { butt: 1 },
  "Akaleri":   { butt: 3 },
  "elBulli":   { butt: 3 },
  "Akelarre":  { butt: 3 }
};

describe('#countLetters', ()=>{
  it('works with callback stars === 3 ', ()=>{
    assert.strictEqual(lotide.findKey(testObj, x=>x.stars===3), "Akaleri");
  });
  it('works with callback stars === 2 ', ()=>{
    assert.strictEqual(lotide.findKey(testObj, x=>x.stars===2), "noma");
  });
  it('works with obj with no key name "star"', ()=>{
    assert.strictEqual(lotide.findKey(testObj1, x=>x.stars===3), undefined);
  });
  it('works with empty object', ()=>{
    assert.strictEqual(lotide.findKey({}, x=>x.stars===3), undefined);
  });
});