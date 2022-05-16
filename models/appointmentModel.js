const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const STATUS =require('../helper/status');

const appointmentSchema = new Schema({
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        default: null
    },
    serviceType:{
        type:String,
        enum:['SERVICE','SUBSERVICE'],
        default:null
    },
    appointmentDate: {
        type: Date,
        default: null 
    },
    appointmentTime: {
        type: String,
        default: null
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers',
        default: null
    },
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        default: null
    },
    facility:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        default: null 
    },
    department:{
        type:String,
        default:null
    },
    location:{
        type:String,
        default:null
    },
    spentTime: {
        type: String,
        default: null
    },
    status: {
        type: String,
        // enum: ["UPCOMING", "COMPLETE", "CANCEL"],
        default: STATUS.PENDING
    }


}, {
    timestamps: true
});

appointmentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Appointment", appointmentSchema);