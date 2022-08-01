
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const availabilityCalenderSchema = new Schema({
    provider: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        default: null
    },
    time: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AvailabilityCalenderTime'
    }]
});
module.exports = mongoose.model('AvailabilityCalender', availabilityCalenderSchema);