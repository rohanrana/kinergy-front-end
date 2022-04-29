const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const departmentsSchema = new Schema({
    deptName: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    },


}, {
    timestamps: true
});

departmentsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Departments", departmentsSchema);