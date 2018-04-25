const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    index : String,
    title : String,
    example : String,
    status : Number
})