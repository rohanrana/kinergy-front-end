const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    profilePic: {
        type: String,
        default: null
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    },
    type: {
        type: String,
        default: "CUSTOMER"
    },
    jwtToken: {
        type: String,
        default: null
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles',
        default: null
    },
    lastLoginIp: {
        type: String,
        default: null
    },
    otp: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    pin: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHERS']
    },
    dob: {
        type: String,
        default: null
    },

}, {
    timestamps: true
});

customersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Customers", customersSchema);