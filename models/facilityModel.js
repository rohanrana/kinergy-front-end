import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
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
export default mongoose.model("Facility", facilitySchema);
