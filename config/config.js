module.exports = {
    LCR_INFRA: {
        user: process.env.DB_USER, 
        server: process.env.DB_HOST, 
        password: process.env.DB_PASS,
        database: process.env.DB_BD
    },
    Mobile: {
        user: process.env.DB_USER2, 
        server: process.env.DB_HOST2, 
        password: process.env.DB_PASS2,
        database: process.env.DB_BD2,
    },    
}