module.exports = (express) => {
    app = express();
    _appUse(),
    _requires()
}

function _appUse() {
    const bodyParser = require('body-parser'),
          cors = require('cors');
          
    app.use(bodyParser.json({ limit: '25mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }));

    app.use(cors());
}

function _requires() {
    helmet = require('helmet'),
    env = require('dotenv').config(),
    http = require('http'),
    jwt = require('jsonwebtoken'),
    cookieParser = require('cookie-parser'),
    cors = require('cors')
}