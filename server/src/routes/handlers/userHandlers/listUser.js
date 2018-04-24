const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const {params : { id }} = req

    logic.listUser(id)
        .then(user => res.json(success(user)))
        .catch(err => res.json(fail(err)))
}