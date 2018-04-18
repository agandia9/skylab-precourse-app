const logic = require('../../logic')

module.exports = (req,res) => {
    logic.listUsers()
        .then(users => res.json(users))
        .catch(err => res.json(err))
}