const { Router } = require('express');
const router = Router();

router.use('/register', require('./register'));
router.use('/auth', require('./auth'));
router.use(require('./protect'));
router.use('/', require('./users'));

module.exports = router;
