const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')
const subServiceSchema = new Schema({
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
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ServiceCategory",
        default:null
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        default:null
    },
    priceDetail: [
        {
          price: { type: Number, default: null },
          duration: { type: Number, default: null },
        },
      ],
    addBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Staff",
        default:null
    },
    insuranceApplicable:{
        type: String,
        enum: ["YES", "NO"],
        default: "NO"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK"],
        default: "ACTIVE"
    }


}, {
    timestamps: true
});

subServiceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("SubService", subServiceSchema);