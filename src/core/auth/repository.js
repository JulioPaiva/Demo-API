const config = require('../../../config/config')
      sql = require('mssql');

module.exports = {
    login
}

async function login(param){
    let pool = await sql.connect(config.LCR_INFRA);

    let data = await pool.request().query(`SELECT * FROM [USUARIO] WHERE LOGIN = '${param.user}' AND SENHA = '${param.pwd}'`);

    sql.close();

    return data["recordsets"][0][0];
}