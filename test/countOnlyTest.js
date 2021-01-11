let assert = require('chai').assert;
let lotide = require('../index');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = lotide.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countLetters', ()=>{
  it('Jason should be 1', ()=>{
    assert.strictEqual(result1["Jason"], 1);
  });
  it('Karima should be undefined', ()=>{
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('Fang should be 2', ()=>{
    assert.strictEqual(result1["Fang"], 2);
  });
  it('Agouhanna should be undefined', ()=>{
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});