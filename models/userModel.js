import mongoose from  'mongoose';
import bcrypt from 'bcryptjs';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    userId: {
        type: Number
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
        enum: ["SUPERADMIN","DOCTOR","STAFF","FACILITY"],
        default: "STAFF"
    },
    status: {
        type: String,
        enum: ["ACTIVE","INACTIVE","BLOCK"],
        default: "ACTIVE"
    },
    jwtToken:{
        type:String
    },
    // deviceToken:{
    //     type:String
    // },
    // deviceType:{
    //     type:String
    // }
},{
    timestamps: true
});

userSchema.plugin(mongoosePaginate);
export default mongoose.model('Users',userSchema);

// mongoose.model('Users',userSchema).findOne({type:"SUPERADMIN"}, (err,res)=>{
//     if(!res){
//         let obj = { 
//                 firstName: "Test",
//                 lastName: "Model",
//                 password: "Abc123",
//                 type: "SUPERADMIN",
//                 email: "testmodel@xyz.com",
//                 contact: "+911234567897"
//         };
//         var pass;
//         const saltRounds = 10;
//         bcrypt.genSalt(saltRounds, (err1,salt) => {
//             bcrypt.hash(obj.password, salt, (err2,hash)=>{
//                 obj.password = hash;
//                 mongoose.model('Users',userSchema).create(obj, (error, success) => {
//                     if(error)
//                         console.log("Error is"+ error)
//                     else
//                         console.log("User saved succesfully.");
//                 })
//             })
//         });
//     }
// });