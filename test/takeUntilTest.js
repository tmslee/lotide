let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});


const test1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const test2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(test1, x=>x<0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(test2, x=>x===','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);