const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');
const Role = require('../models/roleModel');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    nickName: {
        type: String,
        default: null
    },
    dob: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', ""],
        default: ""
    },
    ssn: {
        type: String,
        default: null
    },
    phone1: {
        type: String,
        default: null
    },
    phone2: {
        type: String,
        default: null
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        default: null
    },
    addressLine: {
        type: String,
        default: null
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
        type: String,
        default: null
    },
    autoReminder: {
        type: String,
        default: null
    },
    appointConfirm: {
        type: String,
        default: null
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles'
    },
    ssnDocument: {
        type: String,
        default: null
    },
    driverLicense: {
        type: String,
        default: null
    },
    workPermit: {
        type: String,
        default: null
    },
    ssnDocumentUrl: {
        type: String,
        default: null
    },
    driverLicenseUrl: {
        type: String,
        default: null
    },
    workPermitUrl: {
        type: String,
        default: null
    },
    lastLoginIp: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }
}, {
    timestamps: true
})

employeeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Employee', employeeSchema);