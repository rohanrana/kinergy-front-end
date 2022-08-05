const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const specialitySchema = new Schema({
    name: {
        type: String,
        default: null,
      },
});

module.exports = mongoose.model("Speciality", specialitySchema);
