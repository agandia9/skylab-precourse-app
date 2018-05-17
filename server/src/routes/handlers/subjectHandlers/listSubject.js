const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    
    const { params : { unit } } = req

    logic.listSubject(unit)
        .then(subject => res.json(success(subject)))
        .catch(err => res.json(fail(err.message)))

}