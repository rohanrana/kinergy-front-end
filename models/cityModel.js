const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    state: {
        type: Number,
        ref: 'State'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

module.exports = mongoose.model('City', citySchema);