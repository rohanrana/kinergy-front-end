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
    contact: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    facilityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    profilePic: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        country:{type:String},state:{type:String},address:{type:String},zipcode:{type:Number},city:{type:String},landmark:{type:String}
    },

    type: {
        type: String,
        default: "CUSTOMER"
    },
    status: {
        type: String,
        enum: ["ACTIVE","INACTIVE","BLOCK"],
        default: "ACTIVE"
    },
    jwtToken:{
        type:String
    },
  
},{
    timestamps: true
});

customersSchema.plugin(mongoosePaginate);
export default mongoose.model("Customers",customersSchema);
