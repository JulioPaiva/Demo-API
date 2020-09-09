const express = require('express'),
      init = require('./config/init')(express);

(async () => {
    try{
        app.use(helmet());
        app.use(cookieParser());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        require('./src/api/routes/ping')(app);
        require('./src/api/routes/auth')(app);
        
        app.listen(process.env.PORT, () => 
                console.log(`Listening on port ${process.env.PORT}!`));

    } catch (ex) {
        console.error(ex.message);
    }
})();