const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    totalPercentage: {
        type: Number,
        required: true
    },
    photo: {
        type: String
    },
    slackUser: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    subjects: [
        {
            porcentage: {
                type: Number,
                required: true
            },
            subject: {
                type: ObjectId,
                ref: 'Subject',
                required: true
            },
            exercises: [{
                status: {
                    type: Number,
                    required: true
                },
                exercise: { 
                    type: ObjectId, 
                    ref: 'Exercise',
                    required: true
                },
            }]
        }
    ]
})