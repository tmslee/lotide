let assert = require('chai').assert;
let lotide = require('../index');

describe('#countLetters', ()=>{
  it('', ()=>{

  });
});

assertArraysEqual(flatten([1,2,3,[4,5], [6,7]]), [1,2,3,4,5,6,7]);
assertArraysEqual(flatten([[1],[2],[3],[4]]), [1,2,3,4]);
assertArraysEqual(flatten([],[],[],[]), []);
assertArraysEqual(flatten([1,2,3,4,5]), [1,2,3,4,5]);

assertArraysEqual(flattenRecursion([1,2,3,[4,5], [6,7], [[[8,9,10],[11],12,13],[[14]],15, 16, [[17,18,19],[20],[21,22]]]]), [1,2,3,4,5,6,7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22]);
assertArraysEqual(flattenRecursion([[1],[2],[3],[4]]), [1,2,3,4]);
assertArraysEqual(flattenRecursion([],[],[],[]), []);
assertArraysEqual(flattenRecursion([1,2,3,4,5]), [1,2,3,4,5]);