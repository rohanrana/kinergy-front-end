const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const STATUS = ["UPCOMING", "COMPLETE", "CANCELLED", "PENDING"];
const appointmentSchema = new Schema({
    serviceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        default: null
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
        ref: 'Staffs',
        default: null
    },
    spentTime: {
        type: String,
        default: null
    },
    status: {
        type: String,
        // enum: ["UPCOMING", "COMPLETE", "CANCEL"],

        default: "PENDING"
    }


}, {
    timestamps: true
});

appointmentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Appointment", appointmentSchema);