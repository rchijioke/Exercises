const assertEqual = require('../assertEqual');
const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns ['5'] for ['5']", () => {
    assert.deepEqual(tail(['5']), ['5']);
  })
});