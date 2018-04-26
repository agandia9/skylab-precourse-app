const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { body: { unit, theory, resource, unitPercentage } } = req

    logic.createSubject(unit, theory, resource, unitPercentage)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}