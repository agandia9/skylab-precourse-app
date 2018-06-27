const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
    totalPercentage: {type:Number,required:true,default:0},
    photo: {type:String,required:true,default:"https://www.knowmuhammad.org/img/noavatarn.png"},
    slackUser: String,
    isAdmin: {type:Boolean, required:true, default:false},
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