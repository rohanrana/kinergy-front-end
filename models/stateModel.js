const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    _id: {
        type: Number,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    cities: [{
        type: Number,
        ref: 'City'
    }],
    country: [{
        type: Number,
        ref: 'Country'
    }],
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility'

    }],
    status: {
        type: String,
        // enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }
});

module.exports = mongoose.model('State', stateSchema);