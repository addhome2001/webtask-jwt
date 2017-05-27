const { Router } = require('express');
const usersRouter = Router();
const jwt = require('jsonwebtoken');
const Users = require('../schema');

usersRouter.get('/', (req, res) => {
  Users.findAllUsers((err, users) => {
    if (err) throw error;

    res.json({ success: true, users });
  });
});

module.exports = usersRouter;
