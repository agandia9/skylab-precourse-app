const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    
    const { params : { id } } = req

    logic.listExercise(id)
        .then(exercise => res.json(success(exercise)))
        .catch(err => res.json(fail(err.message)))
}