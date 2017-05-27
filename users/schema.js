const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
});

UserSchema.statics = {
  registerUser(payload, cb) {
    const newUser = new this(payload);
    newUser.save(cb);
  },

  issueToken(payload, cb) {
    this.findOne(payload, cb);
  },

  findAllUsers(cb) {
    this.find({}, cb);
  }
};

module.exports = mongoose.model('User', UserSchema);
