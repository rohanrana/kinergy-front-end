const fs = require("fs");
var slugifire = require("slugify");
const Section = require("../models/sectionModel");
const Form = require("../models/formBuilderModel");
const Question = require("../models/questionModel");
const moment = require("moment");

const  checkFormExist = async (formId) => {
    return await Form.find({ _id: formId }).exec();
  }
module.exports = {
    checkFormExist
};
