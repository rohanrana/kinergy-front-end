const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    
    provider: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        default: null
    },
    blockCalender: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlockCalender',
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


module.exports = mongoose.model('BlockCalenderTime', blockSchema);