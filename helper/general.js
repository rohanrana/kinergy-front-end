const fs = require("fs");
var slugifire = require("slugify");
const Section = require("../models/sectionModel");
const Form = require("../models/formBuilderModel");
const Question = require("../models/questionModel");

var ObjectId = require("mongoose").Types.ObjectId;

const moment = require("moment");
const managePriceDuration = (price, duration) => {
  var returnPriceArr = [];
  if (price) {
    price.map((value, index) => {
      priceObj = {};
      if (duration) {
        if (duration[index]) {
          priceObj.duration = duration[index];
        } else {
          priceObj.duration = null;
        }
      }
      priceObj = { ...priceObj, price: value };
      returnPriceArr.push(priceObj);
    });
  }
  return returnPriceArr;
};

const stringToUpperCase = (string) => {
  return string ? string.toUpperCase() : string;
};

const removeFile = (oldImage, path) => {
  if (oldImage != "undefined" && oldImage != null) {
    let filePath = path + "/" + oldImage;
    fs.unlink(filePath, function (err) {
      if (!err) console.log("removed");
    });
  }
};

const slugify = (string) => {
  if (string) {
    return slugifire(string, {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: true,
      trim: true,
    });
  } else return string;
};

const getSection = (where) => {
  var returnData = null;
  Section.find(where)
    .lean()
    .exec((err, result) => {
      returnData = result;
    });
  return returnData;
};

const removeSection = (_id) => {
  Section.find({ form: _id })
    .select("_id")
    .lean()
    .exec((err, resSection) => {
      if (resSection.length > 0) {
        resSection.map((section, key) => {
          Section.findByIdAndDelete({ _id: section._id })
            .lean()
            .exec((err, result) => {
              Question.deleteMany({ section: result._id })
                .lean()
                .exec((err, quesResult) => {});
            });
        });
      }
    });
  query = {};
  query = { ...query, _id: _id };
  Form.updateOne(query, { section: [] }).exec((err, resupdate) => {});
};

/**
 *
 *
 */

const managePhoneAndType = (phone, phoneType, primary = null) => {
  let phoneArr = [];
  if (phone) {
    phone.map((value, index) => {
      phoneObj = {};
      if (phoneType[index]) {
        phoneObj.phoneType = phoneType[index];
      } else {
        phoneObj.phoneType = null;
      }
      if (primary && primary[index]) {
        phoneObj.primary = primary[index];
      }
      phoneObj = { ...phoneObj, phone: value };
      phoneArr.push(phoneObj);
    });
  }
  return phoneArr;
};

const getDateFormat = () => {
  return "MM-DD-YYY";
};

const dateFormat = (date) => {
  // console.log('Date',new Date().getTimezoneOffset());
  // return  new Date(+new Date(date) +  5.5 * 60 * 60 * 1000);
  // return new Date(date);
  // console.log( moment(date).add(5, 'hours').add(30, 'minutes').format(this.getDateFormat));
  return moment(new Date(date)).add(5, "hours").add(30, "minutes");
};
// Data, Key,  and Value
function checkValueExist(data, key, value) {
  // log('data',data);
  return (isFound = data.some((element) => {
    if (element[key] == value) {
      return true;
    }
    return false;
  }));
}

const isObjectEmpty = (object) => {
  var isEmpty = true;
  for (keys in object) {
    isEmpty = false;
    break; // exiting since we found that the object is not empty
  }
  return isEmpty;
};

const checkObjectId = (id) => {
  return ObjectId.isValid(id);
};

module.exports = {
  managePriceDuration,
  stringToUpperCase,
  removeFile,
  slugify,
  getSection,
  removeSection,
  getDateFormat,
  dateFormat,
  managePhoneAndType,
  checkValueExist,
  isObjectEmpty,
  checkObjectId,
};
