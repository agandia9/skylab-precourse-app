const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    unit : Number,
    title : String,
    theory : String,
    resource : Array,
    unitPercentage : Number,
    exercises : [
        {
            type: ObjectId,
            ref: 'Exercise'
        }
    ]
})