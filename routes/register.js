const registerRouter = require('express').Router();

registerRouter.post('/', (req, res) => {
  const { username, password } = req.body || {};

  if (username.length > 0 && password.length > 0) {
    const user = new req.userModel({ username, password });

    user.save((err, user) => {
      if (err) throw error;

      res.json({ success: true, user });
    });
  }
});

module.exports = registerRouter;
