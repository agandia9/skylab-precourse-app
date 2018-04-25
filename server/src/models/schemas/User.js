const mongoose = require('mongoose')
const Subject = require('./Subject')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name : String,
    lastname : String,
    username : String,
    password : String,
    totalPercentage : Number,
    photo : String,
    slackUser : String,
    units : [Subject]
})