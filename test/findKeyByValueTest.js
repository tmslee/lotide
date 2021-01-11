let assert = require('chai').assert;
let lotide = require('../index');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  anotherGenre : "The Expanse",
  "": "edgeCase1",
  "edgeCase2":"" 
};

describe('#countLetters', ()=>{
  it('the write should return drama', ()=>{
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('brooklyn nine nine should return comedy', ()=>{
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it('the expanse should return scifi', ()=>{
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
  it('that 70s show should return undefined', ()=>{
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('edgecase1 should return empty string', ()=>{
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "edgeCase1"), "");
  });
  it('empyt string should return edgecase2', ()=>{
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, ""), "edgeCase2");
  });
});