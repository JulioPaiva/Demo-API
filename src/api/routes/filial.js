const controller = require('../../core/filial/controller'),
       verifyJWT = require('../../../config/init');

module.exports = (app) => {
    app.get('/filiais', verifyJWT , async (req, res, next) => {
        let data = await controller.listarFiliais();

        res.send(data).status(200)
    });
}

function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      req.userId = decoded.id;
      next();
    });
}