const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkUsersSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    default: null,
  },
  userLinked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  canBookAppointment: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  canUnlinkOther: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  status: {
    type: String,
    enum:["APPROVE","REJECT","REMOVED",""],
    default:""
  },
});

module.exports = mongoose.model("LinkUsers", linkUsersSchema);
