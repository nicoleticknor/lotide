const assertEqual = require('../assertEqual');
const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

describe('#tail', () => {
  it('should return "Lighthouse,Labs" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse,Labs");
  });
  it('should return "" for ["Yo Yo"]', () => {
    assert.strictEqual(tail(["Yo Yo"]), '');
  });

  it('should return "" for []', () => {
    assert.strictEqual(tail([]), '');
  });

  it('should return "3" for [1, 3]', () => {
    assert.strictEqual(tail([1, 3]), '3');
  });

});
