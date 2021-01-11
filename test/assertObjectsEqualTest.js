let assert = require('chai').assert;
let lotide = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
lotide.assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
lotide.assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
lotide.assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
lotide.assertObjectsEqual(cd, cd2);