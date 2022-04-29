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
        type: String,
        default: null
    },
    tax: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tax'
    },
    amount: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE", "BLOCK", "ARCHIVED"],
        default: "ACTIVE"
    }


}, {
    timestamps: true
});

billableItemSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("BillableItem", billableItemSchema);