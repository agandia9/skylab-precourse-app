const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    logic.listUsers()
        .then(users => res.json(success(users)))
        .catch(err => res.json(fail(err)))
}