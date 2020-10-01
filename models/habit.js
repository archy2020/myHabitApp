//require the library
const mongoose = require('mongoose');
const dateonly=require('mongoose-dateonly')(mongoose); 
const habitSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    date: {
        type: dateonly,
        required: true
    }
});

const Habit = mongoose.model('Habit', habitSchema );
module.exports = Habit;