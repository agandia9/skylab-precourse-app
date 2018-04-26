const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { body: { unit, title, theory, resource, unitPercentage } } = req

    logic.createSubject(unit, title, theory, resource, unitPercentage)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}