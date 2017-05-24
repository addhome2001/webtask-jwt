const register = require('./register');
const auth = require('./auth');
const protect = require('./protect');
const users = require('./users');

module.exports = app => {
  app.use('/register', register);
  app.use('/auth', auth);
  app.use(protect);
  app.use('/users', users);
};
