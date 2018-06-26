const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    unit : {
        type: Number,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    theory : {
        type: String,
        required: true
    },
    resource : {
        type: Array
    },
    exercises : [
        {
            type: ObjectId, 
            ref: 'Exercise'
        }
    ]
})