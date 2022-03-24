import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const departmentsSchema = new Schema({
    deptName: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    description: {
        type: String
    },
    deptImg: {
        type: String
    },
    type: {
        type: String,
        default: "CUSTOMER"
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
