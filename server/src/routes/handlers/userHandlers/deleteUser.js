const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { params : { id }} = req

    logic.deleteUser(id)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}