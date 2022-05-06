const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;


const billableItemSchema = new Schema({
    itemType: {
        type: String,
        default: null
    },
    itemCode: {
        type: String,
        default: null
    },
    itemName: {
        type: String,
        default: null
    },
    rate: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
    },
    tax: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
    },
    taxAmount: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
        
    },
    totalAmount: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
    },
    status: {
        type: String,
        // enum: ["ACTIVE", "INACTIVE", "BLOCK", "ARCHIVED"],
        default: "ACTIVE"
    }


}, {
    timestamps: true
},{toJSON: {getters: true}});

billableItemSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("BillableItem", billableItemSchema);