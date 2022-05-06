const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const departmentsSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    image:{
        type:String,
        default:null
    },
    type:{
        type:String,
        enum: ["GENERAL", "MEDICAL", "PERFORMANSE"],
        default: "GENERAL"
    },
    status: {
        type: String,
        // enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    },


}, {
    timestamps: true
});

departmentsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Department", departmentsSchema);