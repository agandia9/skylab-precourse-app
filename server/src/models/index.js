const mongoose = require('mongoose')

const { User,Subject,Exercise } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Subject: mongoose.model('Subject', Subject),
    Exercise: mongoose.model('Exercise', Exercise)
}