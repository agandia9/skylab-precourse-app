const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    logic.listExercises()
        .then(exercises => res.json(success(exercises)))
        .catch(err => res.json(err.message))
}