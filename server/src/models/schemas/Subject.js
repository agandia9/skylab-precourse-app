const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    unit : Number,
    theory : String,
    resource : Array,
    unitPercentage : Number
})