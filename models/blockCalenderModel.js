const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    provider: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        default: null
    },
    title: {
        type: String,
        default: null
    },
    time: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlockCalenderTime'
    }]
});


module.exports = mongoose.model('BlockCalender', blockSchema);