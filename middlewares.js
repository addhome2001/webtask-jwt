const mongoose = require('mongoose');

module.exports.db = (req, res, next) => {
  mongoose.connect(req.webtaskContext.secrets.MONGO_URL);
  req.on('close', () => {
    mongoose.connection.close();
  });
  next();
};
