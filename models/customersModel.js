const mongoose =require(  'mongoose');
const mongoosePaginate =require( 'mongoose-paginate');
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
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE","INACTIVE","BLOCK"],
        default: "ACTIVE"
    },
    type:{
        type:String,
        default:"CUSTOMER"
    },
    jwtToken:{
        type:String
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Roles'
    },
    lastLoginIp: {
        type: String
    },
    otp:{
        type:String
    }
  
},{
    timestamps: true
});

customersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Customers",customersSchema);
