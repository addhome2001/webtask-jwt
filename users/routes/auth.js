const { Router } = require('express');
const authRouter = Router();
const jwt = require('../../jwt');
const Users = require('../schema');

authRouter.post('/', (req, res) => {
  const { username, password } = req.body || {};

  Users.issueToken({ username }, (err, user) => {
    if (err) throw err;

    if (user) {
      if (password != user.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        const token = jwt.issue({ username, password });

        res.json({ success: true, token });
      }
    } else {
      res.json({ success: false, message: 'Authentication failed. Wrong username.' });
    }
  });
});

module.exports = authRouter;
