const app = require('express')();
const webtask = require('webtask-tools');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const config = require('./config');
const routes = require('./routes');
const middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(middlewares.db);
app.use(middlewares.setSecret);

routes(app);

module.exports = webtask.fromExpress(app);
