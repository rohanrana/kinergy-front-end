const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    _id: {
        type: Number
    },
    sortname: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    phoneCode: {
        type: Number,
        default: null
    },
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees'
    }]
});


module.exports = mongoose.model('Country', countrySchema);