const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resMessage = require("../helper/httpResponseMessage");
const questionSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    optionType: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: [
      {
        label: {
          type: String,
          default: null,
        },
        value: {
          type: String,
          default: null,
        },
      },
    ],
    comment: {
      type: String,
      default: null,
    },
    file: 
      {
        active: {
          type: Boolean,
          default: false,
        },
        fileType: String,
        maxFiles: {
          type: Number,
          default: 1,
        },
        maxFileSize: {
          type: Number,
          default: 2 * 1024 * 1024,
        },
      },
    

    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },

    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },  
    sort:{
      type:Number,
      default:0
    } 
  }
);

module.exports = mongoose.model("Question", questionSchema);
