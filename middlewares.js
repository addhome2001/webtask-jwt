const mongoose = require('mongoose');
const UserSchema = require('./models/User');
const config = require('./config');

module.exports.db = (req, res, next) => {
  const db = mongoose.createConnection(req.webtaskContext.secrets.MONGO_URL);
  req.userModel = db.model('User', UserSchema);
  req.on('close', () => {
    db.connection.close();
  });
  next();
}

module.exports.setSecret = (req, res, next) => {
  req.secret = config.secret;
  next();
}
