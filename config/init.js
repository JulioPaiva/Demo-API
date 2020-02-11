module.exports = (express) => {
    app = express();
    _appUse(),
    _requires(),
    verifyJWT
}

function _appUse() {
    const bodyParser = require('body-parser');
    app.use(bodyParser.json({ limit: '25mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }));
}

function _requires() {
    helmet = require('helmet'),
    env = require('dotenv').config(),
    http = require('http'),
    jwt = require('jsonwebtoken')
    cookieParser = require('cookie-parser')
}