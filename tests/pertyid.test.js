const { describe, it } = require('node:test');
const assert = require('node:assert');

const { pertyid, DEFAULT_LENGTH } = require('../index');

describe('pertyid', () => {
  it('should generate a base64 string of a default length', () => {
    assert.strictEqual(pertyid().length, DEFAULT_LENGTH);
  });

  it('should generate a base64 string of a given length', () => {
    const lens = [15, 32, 6, 11, 87, 17, 1, 5, 3];
    lens.forEach((l) => {
      assert.strictEqual(pertyid(l).length, l);
    });
  });
});
