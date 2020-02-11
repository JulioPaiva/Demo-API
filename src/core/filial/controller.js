const repository = require('./repository');

module.exports = {
    listarFiliais
}

async function listarFiliais() {
    let result = await repository.listarFiliais();

    return result["recordsets"][0];
}