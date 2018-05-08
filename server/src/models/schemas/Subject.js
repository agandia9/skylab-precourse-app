const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    unit : Number,
    title : String,
    theory : String,
    resource : Array,
    exercises : [
        {
            type: ObjectId,
            ref: 'Exercise'
        }
    ]
})