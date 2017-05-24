const jwt = require('jsonwebtoken');
const authRouter = require('express').Router();

authRouter.post('/', (req, res) => {
  const { username, password } = req.body || {};

  req.userModel
    .findOne({ username }, (err, user) => {
      if (err) throw err;

      if (user) {
        if (password != user.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
          const token = jwt.sign({ username, password }, req.secret, {
            expiresIn: '12h',
          });

          res.json({ success: true, token });
        }
      } else {
        res.json({ success: false, message: 'Authentication failed. Wrong username.' });
      }
    });

});

module.exports = authRouter;
