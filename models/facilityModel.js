const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;


const facilitySchema = new Schema({
    facilityName: {
        type: String,
        default: null
    },
    contact: {
        type: String,
        default: null
    },
    fax: {
        type: String,
        default: null
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    location: {
        type: String,
        default: null
    },
    facilityImg: {
        type: String,
        default: null
    },
    city: {
        type: Number,
        ref: 'City',
        default: null
    },
    state: {
        type: Number,
        ref: 'State',
        default: null
    },
    pincode: {
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
});

facilitySchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Facility", facilitySchema);