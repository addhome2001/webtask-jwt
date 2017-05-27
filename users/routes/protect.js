const jwt = require('../../jwt');

module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.get('x-access-token');

  if (token) {
    jwt.verify(token, (err, decode) => {
      if (err) {
        return res.json(err);
        return res.json({ success: false, message: 'Authentication failed. Wrong token.' });
      }

      req.decode = decode;
      next();
    });
  } else {
    res.status(403).send({ success: false, message: 'No token provided.' });
  }
};
