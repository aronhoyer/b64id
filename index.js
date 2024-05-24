const crypto = require('node:crypto');

const DEFAULT_LENGTH = 10;

function pertyid(len = DEFAULT_LENGTH) {
  const l = Math.ceil((3 / 4) * len);
  const b = crypto.randomBytes(l);
  return b.toString('base64url').slice(0, len);
}

module.exports = pertyid;
module.exports.default = pertyid;
module.exports.pertyid = pertyid;

module.exports.DEFAULT_LENGTH = DEFAULT_LENGTH;
