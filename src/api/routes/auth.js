const controller = require('../../core/auth/controller');

module.exports = (app) => {
    app.post('/login', async (req, res, next) => {
        let param = {
            user: req.body.user,
            pwd: req.body.pwd
        }
        
        let data = await controller.login(param);

        if (data.Ativo){
            const id = 1; //esse id viria do banco de dados
            var token = await jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });

            res.status(200).send({ auth: true, token: token });
        } else
            res.status(500).send('Login inválido!');
    });
    
    app.get('/logout', function(req, res) {
      res.status(200).send({ auth: false, token: null });
    });
}