const config = require('../../../config/config')
      sql = require('mssql');

module.exports = {
    listarFiliais
}

async function listarFiliais(){
    let pool = await sql.connect(config.LCR_INFRA);

    let data = await pool.request().query(`SELECT FILIAL, Filial_Descricao FROM View_Filiais`);

    sql.close();

    return data;
}