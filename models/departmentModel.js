import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const departmentsSchema = new Schema({
    deptName: {
        type: String
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
export default mongoose.model("Departments", departmentsSchema);
