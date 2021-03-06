const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {
    
    const  { params : { id } } = req
    const { body : { unit,index,title,example,status } } = req

    logic.updateExercice(id,unit,index,title,example,status)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}