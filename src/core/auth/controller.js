const repository = require('./repository');

module.exports = {
    login
}

async function login(param) {
    let result = await repository.login(param);

    return result;
}