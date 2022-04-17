const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');
const Role = require('../models/roleModel');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    nickName: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', ""],
        default: ""
    },
    ssn: {
        type: String
    },
    phone1: {
        type: String
    },
    phone2: {
        type: String
    },
    email: {
        type: String
    },
    addressLine: {
        type: String
    },
    city: {
        type: Number,
        ref: 'City'
    },
    state: {
        type: Number,
        ref: 'State'
    },
    pincode: {
        type: String
    },
    autoReminder: {
        type: String
    },
    appointConfirm: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    ssnDocument: {
        type: String
    },
    driverLicense: {
        type: String
    },
    workPermit: {
        type: String
    }
})

employeeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Employee', employeeSchema);