const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    
    provider: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        default: null
    },
    availabilityCalender: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AvailabilityCalender',
        default: null
    },
    from: {
        type: Date,
        default: null
    },    
    to: {
        type: Date,
        default: null
    },
});


module.exports = mongoose.model('AvailabilityCalenderTime', blockSchema);