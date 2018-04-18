const logic = require('../../logic')

module.exports = (req,res) => {

    const {params : { id }} = req

    logic.listUser(id)
        .then(user => res.json(user))
        .catch(err => res.json(err))
}