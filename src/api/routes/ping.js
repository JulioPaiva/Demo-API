module.exports = (app) => {
    // app.get('/filiais', verifyJWT , async (req, res, next) => {
    app.get('/ping', (req, res) => {
        res.send(new Date()).status(200)
    });
}

//const verifyJWT = require('../../../config/init');

// function verifyJWT(req, res, next){
//     var token = req.headers['x-access-token'];
//     if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
//     jwt.verify(token, process.env.SECRET, function(err, decoded) {
//       if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
//       req.userId = decoded.id;
//       next();
//     });
// }