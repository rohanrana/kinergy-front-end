const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')
const serviceCategorySchema = new Schema({
    title: {
        type: String,
        default: null
    },
    slug: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    addBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Staff",
        default:null
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        default:null
    },
    sub:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubService",
        default:null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }


}, {
    timestamps: true
});

serviceCategorySchema.plugin(mongoosePaginate);
module.exports = mongoose.model("ServiceCategory", serviceCategorySchema);