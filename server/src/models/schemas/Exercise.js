const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    unit : {
        type: ObjectId,
        ref: 'Subject',
        required: true
    },
    index : String,
    title : String,
    example : String,
    status : Number
})