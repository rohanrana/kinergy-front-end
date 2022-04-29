const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    contact: {
        type: String,
        default: null
    },
    gender: {
        enum: ["MALE", "FEMALE", ""],
        default: '',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    profilePic: {
        type: String,
        default: null
    },
    signature: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    type: {
        type: String,
        //  enum: ["SUPERADMIN","DOCTOR"],
        default: "DOCTOR"
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles',
        default: null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    },
    jwtToken: {
        type: String,
        default: null
    },
    appointments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        default: null
    },
    lastLoginIp: {
        type: String,
        default: null
    },
    otp: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    city: {
        type: Number,
        default: null
    },
    state: {
        type: Number,
        default: null
    },
    country: {
        type: Number,
        default: null
    },
    pin: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHERS']
    },
    dob: {
        type: String,
        default: null
    },
    jobTitle: {
        type: String,
        default: null
    },
    department: {
        type: String,
        default: null
    },
    notes: {
        type: String,
        default: null
    }
    // deviceToken:{
    //     type:String
    // },
    // deviceType:{
    //     type:String
    // }
}, {
    timestamps: true
});

staffSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Staffs', staffSchema);

mongoose.model('Staff', staffSchema).findOne({ type: "SUPERADMIN" }, (err, res) => {
    if (!res) {
        let obj = {
            firstName: "Test",
            lastName: "Model",
            password: "12345678",
            type: "SUPERADMIN",
            email: 'admin@test.com',
            status: "ACTIVE",
            contact: "+911234567897",
            otp: "",
            address: "Tower Uniside",
            city: 5022,
            state: 38,
            pin: "201301",
            dob: "1/11/1999",
            gender: "MALE"
        };
        var pass;
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err1, salt) => {
            bcrypt.hash(obj.password, salt, (err2, hash) => {
                obj.password = hash;
                mongoose.model('Staffs', staffSchema).create(obj, (error, success) => {
                    if (error)
                        console.log("Error is" + error)
                    else
                        console.log("User saved succesfully.");
                })
            })
        });
    }
});