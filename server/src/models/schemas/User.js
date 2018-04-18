const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    stateallprecourse: String,
    photo: String,
    slackUser: String,
    units: Array
})