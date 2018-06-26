const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    unit: {
        type: ObjectId,
        ref: 'Subject',
        required: true
    },
    index: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: true
    }
})