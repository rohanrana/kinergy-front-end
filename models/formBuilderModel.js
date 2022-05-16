const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formBuilderSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    slug:{
      type:String,
      default:null
    },
    description: {
      type: String,
      default: null,
    },
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        default:null
      }
    ,
    section: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    status: {
      type: String,
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Form", formBuilderSchema);
