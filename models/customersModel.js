import mongoose from  'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    profilePic: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE","INACTIVE","BLOCK"],
        default: "ACTIVE"
    },
  
},{
    timestamps: true
});

customersSchema.plugin(mongoosePaginate);
export default mongoose.model("Customers",customersSchema);
