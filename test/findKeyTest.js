let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "elBulli":   { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined);

assertEqual(findKey({
  "Blue Hill": { butt: 1 },
  "Akaleri":   { butt: 3 },
  "elBulli":   { butt: 3 },
  "Akelarre":  { butt: 3 }
}, x => x.stars === 2), undefined);

assertEqual(findKey({
}, x => x.stars === 2), undefined);