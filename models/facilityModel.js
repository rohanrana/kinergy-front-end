const mongoose =require( 'mongoose');
const mongoosePaginate =require('mongoose-paginate');
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    facilityName: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String,
    },
    location: {
        type: String
    },
    facilityImg: {
        type: String
    }


}, {
    timestamps: true
});

facilitySchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Facility", facilitySchema);
