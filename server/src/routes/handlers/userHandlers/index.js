const login = require('./login')
const listUsers = require('./listUsers')
const listUser = require('./listUser')
const createUser = require('./createUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const changeTotalPorcentage = require('./changeTotalPorcentage')
const changeTotalStatus = require('./changeTotalStatus')

module.exports = {
    login,
    listUsers,
    listUser,
    createUser,
    updateUser,
    deleteUser,
    changeTotalPorcentage,
    changeTotalStatus
}