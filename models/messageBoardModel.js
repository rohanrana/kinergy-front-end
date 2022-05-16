const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageModel = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    message: {
      type: String,
      default: null,  
    },
    displayDays: {
      type: Number,
      default: 7,
    },
    endDate: {
      type: Date,
      default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    },
    type:{
        type:String,
        default:"new"
    },
    status: {
      type: String,
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageModel);
