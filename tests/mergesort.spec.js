const { split, merge, mergeSort } = require('../mergesort');
const { expect } = require('chai');
const { describe } = require('mocha');

testArray = [2, 4, 6, 8, 9];
testArray2 = [1, 3, 5, 6, 7, 10];

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4, 5, 6])).to.deep.equal([[1, 2, 3], [4, 5, 6]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge(testArray, testArray2)).to.deep.equal([
      1,
      2,
      3,
      4,
      5,
      6,
      6,
      7,
      8,
      9,
      10,
    ]);
  });
});

describe('MergeSort function', function() {
  it('is able to merge two unsorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(mergeSort([4, 2, 1, 3])).to.deep.equal([1, 2, 3, 4]);
  });
});
