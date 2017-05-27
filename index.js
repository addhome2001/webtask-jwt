const app = require('express')();
const webtask = require('webtask-tools');
const bodyParser = require('body-parser');

const config = require('./config');
const middlewares = require('./middlewares');
const usersRoutes = require('./users/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(middlewares.db);
app.use('/users', usersRoutes);

module.exports = webtask.fromExpress(app);
