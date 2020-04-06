const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const chai = require('chai');
const assert = chai.assert;

describe('#middle', () => {
  it('should return [2] for [1, 2, 3]', () => {
    assert(middle([1, 2, 3]), [2]);
  });
  //I don't understand how this uses assertDeepEqual

  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [undefined, 3] for [1, 2, 3, 4]', () => {
    assert(middle([1, undefined, 3, 4]), [undefined, 3]);
  });


  it('should return [] for []', () => {
    assert(middle([]), []);
  });

  it('should return [] for [1, 2]', () => {
    assert(middle([1, 2]), []);
  });

});