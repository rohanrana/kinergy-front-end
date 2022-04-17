const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;
const Employee = require('../models/employeeModel');
const rolesSchema = new Schema({
        roleName: {
            type: String
        },
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Employee
        },
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