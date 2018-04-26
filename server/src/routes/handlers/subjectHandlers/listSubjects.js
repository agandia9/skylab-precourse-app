const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    logic.listSubjects()
        .then(subjects => res.json(success(subjects)))
        .catch(err => res.json(fail(err.message)))
}
