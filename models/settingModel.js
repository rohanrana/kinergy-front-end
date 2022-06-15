const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const settingSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        default:null,
    },
    name: {
        type: String,
        default: null
    },
    value: {
        type: String,
        default: null
    },
    type: { 
        type: String,
        default:null
    },
});

module.exports = mongoose.model("Setting", settingSchema);

