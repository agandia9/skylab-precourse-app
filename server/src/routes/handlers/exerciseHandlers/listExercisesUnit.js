const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { params : { unit } } = req

    logic.listExercisesUnit(unit)
        .then(user => res.json(success(user)))
        .catch(err => res.json(fail(err)))
}