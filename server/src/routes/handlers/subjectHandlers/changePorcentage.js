const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const {id} = req.tokencito
    const { body : { idSubject }} = req


    logic.changePorcentage(id,idSubject)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}