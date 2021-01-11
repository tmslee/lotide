let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});



const testRes = letterPositions('hello');
console.log(testRes);
const testAns = {h:[0], e:[1] , l:[2,3], o:[4]};
for(let key in testAns){
  assertArraysEqual(testRes[key], testAns[key]);
}