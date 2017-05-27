const jwt = require('jsonwebtoken');
const { secret } = require('./config');

module.exports = {
  issue(payload) {
    return jwt.sign(payload, secret, { expiresIn: '12h' });
  },

  verify(token, cb) {
    jwt.verify(token, secret, cb);
  }
};
