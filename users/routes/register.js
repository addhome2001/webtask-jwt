const { Router } = require('express');
const registerRouter = Router();
const Users = require('../schema');

registerRouter.post('/', (req, res) => {
  const { username, password } = req.body || {};

  if (username.length > 0 && password.length > 0) {
    Users.registerUser({ username, password }, (err, user) => {
      if (err) throw error;

      res.json({ success: true, user });
    });
  }
});

module.exports = registerRouter;
