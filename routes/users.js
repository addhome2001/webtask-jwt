const usersRouter = require('express').Router();

usersRouter.get('/', (req, res) => {
  req.userModel
    .find({}, (err, users) => {
      if (err) throw error;

      res.json({ success: true, users });
    });
});

module.exports = usersRouter;
