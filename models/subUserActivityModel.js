const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const subUserActivitySchema = new Schema({
    t: {type: Date, default: new Date()},
    o: {type: String, required: null},
    d: {type: mongoose.Schema.Types.Mixed, default:null}
});

module.exports = mongoose.model('SubUserActivity', subUserActivitySchema);