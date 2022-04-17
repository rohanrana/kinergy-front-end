const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    cities: [{
        type: Number,
        ref: 'City'
    }],
    country: {
        type: Number,
        ref: 'Country'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

module.exports = mongoose.model('State', stateSchema);