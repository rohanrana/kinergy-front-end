const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;


const taxSchema = new Schema({
    taxName: {
        type: String,
        default: null
    },
    taxRate: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }


}, {
    timestamps: true
});

taxSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Tax", taxSchema);