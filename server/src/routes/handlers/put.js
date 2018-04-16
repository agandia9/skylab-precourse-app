const logic = require('../../logic')

module.exports = (req,res) => {
    logic.put()
        .then(puts => res.json(puts))
        .catch(err => res.json(err))
}