const bubbleSort = require('./bubbleSort');
const { expect } = require('chai');
const { describe } = require('mocha');

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).to.deep.equal([]);
  });

  it('sorts', function() {
    expect(bubbleSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  });

  it('returns an already sorted array', function() {
    expect(bubbleSort([1, 2, 3])).to.deep.equal([1, 2, 3]);
  });

  it('sorts negative numbers in front of positive numbers', function() {
    expect(bubbleSort([1, 2, 3, -4])).to.deep.equal([-4, 1, 2, 3]);
  });
  it('sorts nums that are equivalent', function() {
    expect(bubbleSort([3, 1, 3, -4])).to.deep.equal([-4, 1, 3, 3]);
  });
});
