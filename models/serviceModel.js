const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    slug: {
        type: String
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }


});


module.exports = mongoose.model("Service", serviceSchema);