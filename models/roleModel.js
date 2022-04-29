const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
        roleName: {
            type: String,
            default: null
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE", "BLOCK"],
            default: "ACTIVE"
        },
        employee: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            default: null
        }],
        // premission: [
        //   String
        // ]
        premission: [{
            premissionName: { type: String },
            capabilities: [String]
        }]


    }

    , {
        timestamps: true
    });

rolesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Roles", rolesSchema);