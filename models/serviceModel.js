const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {
        type: String
    },
    slug: {
        type: String
    },
    description: {
        type: String,
    },
    logo: {
        type: String
    },
    banner: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }


});


module.exports = mongoose.model("Service", serviceSchema);