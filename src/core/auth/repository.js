const config = require('../../../config/config')
      sql = require('mssql');

module.exports = {
    login
}

async function login(param){
    let pool = await sql.connect(config.LCR_INFRA);

    let data = await pool.request().query(`SELECT * FROM SC_OPERADORES 
        WHERE MATRICULA = '${param.user}' AND SENHA_PESSOAL = '${param.pwd}' AND portal = 0 AND Ativo = 1`);

    sql.close();

    return data["recordsets"][0][0];
}