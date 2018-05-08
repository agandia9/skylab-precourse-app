const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    totalPercentage: Number,
    photo: String,
    slackUser: String,
    subjects: [
        {
            porcentage: Number,
            subject: {type: ObjectId, ref: 'Subject'},
            exercises: [{
                status: Number,
                exercise: {type: ObjectId, ref: 'Exercise'},
            }]
        }
    ]
})