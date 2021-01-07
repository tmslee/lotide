const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`🐢🐢🐢 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🍎🍎🍎 Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

const findKey = function(obj, callback){
  for(let key in obj){
    if(callback(obj[key])) return key;
  }
  return undefined;
};

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