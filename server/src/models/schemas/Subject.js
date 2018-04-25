const mongoose = require('mongoose')
const Exercise = require('./Exercise')

const { Schema, Schema: { ObjectId } } = mongoose

module.export = new Schema({
    unit : Number,
    theory : String,
    exercice : [Exercise],
    resource : Array,
    unitPercentage : Number
})