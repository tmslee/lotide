let assert = require('chai').assert;
let lotide = require('../index');

lotide.assertArraysEqual([1, 2, 3], [1, 2, 3]);
lotide.assertArraysEqual([1, 2, 3], []);
lotide.assertArraysEqual([1, 2, 3], [1]);
lotide.assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
lotide.assertArraysEqual([1, 2, 3], [0, 2, 3]);
lotide.assertArraysEqual([1, 2, 3], ['1', '2', '3']);
lotide.assertArraysEqual([1, 2, 3], '[1, 2, 3]');