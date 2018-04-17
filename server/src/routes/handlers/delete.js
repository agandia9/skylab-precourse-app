const logic = require('../../logic')

module.exports = (req,res) => {
    logic.delete()
        .then(deletes => res.json(deletes))
        .catch(err => res.json(err))
} 