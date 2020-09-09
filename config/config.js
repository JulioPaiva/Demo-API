module.exports = {
    BD01: {
        user: process.env.DB_USER, 
        server: process.env.DB_HOST, 
        password: process.env.DB_PASS,
        database: process.env.DB_BD
    },
    BD02: {
        user: process.env.DB_USER2, 
        server: process.env.DB_HOST2, 
        password: process.env.DB_PASS2,
        database: process.env.DB_BD2,
    },    
}s