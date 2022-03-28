import mongoose from  'mongoose';
import bcrypt from 'bcryptjs';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const staffSchema = new Schema({
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
    profilePic: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String,
        enum: ["SUPERADMIN","DOCTOR"],
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
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Roles'
    },
    lastLoginIp: {
        type: String
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

staffSchema.plugin(mongoosePaginate);
export default mongoose.model('Staffs',staffSchema);

mongoose.model('Staffs',staffSchema).findOne({type:"SUPERADMIN"}, (err,res)=>{
    if(!res){
        let obj = { 
                firstName: "Test",
                lastName: "Model",
                password: "12345678",
                type: "SUPERADMIN",
                email:'admin@test.com',
                status:"ACTIVE",
                contact: "+911234567897"
        };
        var pass;
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err1,salt) => {
            bcrypt.hash(obj.password, salt, (err2,hash)=>{
                obj.password = hash;
                mongoose.model('Staffs',staffSchema).create(obj, (error, success) => {
                    if(error)
                        console.log("Error is"+ error)
                    else
                        console.log("User saved succesfully.");
                })
            })
        });
    }
});