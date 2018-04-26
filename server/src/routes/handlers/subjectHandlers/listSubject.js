const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    
    const { params : { id } } = req

    logic.listSubject(id)
        .then(subject => res.json(success(subject)))
        .catch(err => res.json(fail(err.message)))

}