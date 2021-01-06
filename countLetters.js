const assertEqual = function(actual, expected) {
  let actualOut = typeof actual === 'string' ? `"${actual}"` : actual;
  let expectedOut = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) console.log(`👌👌👌 Assertion Passed: ${actualOut} === ${expectedOut}`);
  else console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actualOut} !== ${expectedOut}`);
};

const countLetters = function(str){
  let ans = {};
  for(let c of str){
    if (c !== " ") {
      if (ans[c]) ans[c] += 1;
      else ans[c] = 1; 
    }
  }
  return ans;
}

let counts = countLetters('lighthouse in the house');
assertEqual(counts.l, 1);
assertEqual(counts.i, 2);
assertEqual(counts.g, 1);
assertEqual(counts.h, 4);
assertEqual(counts.t, 2);