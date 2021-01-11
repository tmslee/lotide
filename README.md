# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tmslee/lotide`

**Require it:**

`const _ = require('@tmslee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `asserArraysEqual(arr1, arr2)`: assert function that verifies if arr1 and arr2 are deep equal. console logs a message
* `assertEqual(x, y)`: assert function that verifies if variables x and y are strict equal. only suitable for primitive types. console logs a messge
* `assertObjectsEqual(obj1, obj2)`: assert function that verifies if obj1 and obj2 are deep equal. console logs a message
* `countLetters(str)`: returns an object that has a count of all characters in a string str. case sensitive.
* `countOnly(allItems, itemsToCount)`: given input array allItems and input object itemsToCount (key: value being stirng:boolean), this function returns and object containing a count of all items that are included in allItems AND are specified as true in the itemsToCount object. resulting array will not have 0 count items included. 
* `eqArrays(arr1, arr2)`: returns a boolean value indicating if arr1 and arr2 are deep equal.
* `eqObjects(obj1, obj2)`: returns a boolean value indicating if obj1 and obj2 are deep equal. 
* `findKey(obj, callback)`: returns the first key in the object which when the corresponding value from obj is used as an input for the callback function, returns true.
* `findKeyByValue(obj, val)`: returns first key in object which the corresponding value from obj is equal to val.
* `flatten(arr)`: given a nested array of any depth, this function will return a flattened 1-d array containing all the elements from arr.
* `head(arr)`: gievn an input array, head retuns the first element of arr.
* `letterPositions(str)`: given input string str, this function returns an object containing every letter's (exlucing white space) positions in the string. key:value pair is character:array of indices
* `map(array, callback)`: this function is a clone of array.map function, returning a new array of transformed elements under the callback function: all elements will be the result of the callback function with corresponding element from the original array as an input.
* `middle(arr)`: returns the middle element of an array. if the array's length is less than 3 it will always return an empty array. if the array's length is even, it will return an array of length 2 while off will return an array of length 1.
* `tail(arr)`: returns everything but the first element of an array. not in place.
* `takeUntil(array, callback)`: returns a new array. this array is constructed by iterating the original array from left to right; if an element returns false when used as an input for the callback function, it is appended to the resulting array. however, once an element that returns true from the callback function is encountered at all, the function halts and returns the resulting array as is.
* `without(source, itemsToRemove)`: given 2 arrays source and itemsToRemove, returns a new array that contains all elements from source that is not included in itemsToRemove. works with nested arrays.  