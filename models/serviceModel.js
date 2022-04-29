const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')
const serviceSchema = new Schema({
    title: {
        type: String,
        default: null
    },
    slug: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    logo: {
        type: String,
        default: null
    },
    banner: {
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

serviceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Service", serviceSchema);