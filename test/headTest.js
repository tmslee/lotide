const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([]), undefined);
assertEqual(head([3434]), 3434);
assertEqual(head(['a', 'b', 12]), 'a');