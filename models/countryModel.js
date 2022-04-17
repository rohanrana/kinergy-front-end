const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    _id: {
        type: Number
    },
    sortname: {
        type: String
    },
    name: {
        type: String
    },
    phoneCode: {
        type: Number
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});


module.exports = mongoose.model('Country', countrySchema);