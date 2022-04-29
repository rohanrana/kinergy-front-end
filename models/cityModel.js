const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const citySchema = new Schema({
    _id: {
        type: Number
    },
    name: {
        type: String,
        default: null
    },
    state: {
        type: Number,
        ref: 'State'
    },
    country: {
        type: Number,
        ref: 'Country'
    },
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    facility: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility'

    }]
});

module.exports = mongoose.model('City', citySchema);