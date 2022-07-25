const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Facility = require("../models/facilityModel");
const Appointment = require("../models/appointmentModel");
const generalHelper = require("../helper/general");
const appointmentHelper = require("../helper/appointmentHelper");

const path = require("path");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const facilityApis = {
  add: (req, res, next) => {
    const {
      facilityName,
      city,
      state,
      pincode,
      phone,
      phoneType,
      openHours,
      email,
      location,
      address,
      image,
      imageUrl,
      status,
    } = req.body;
    let phoneArr = [];
    if (phone) {
      phone.map((value, index) => {
        phoneObj = {};
        if (phoneType[index]) {
          phoneObj.phoneType = phoneType[index];
        } else {
          phoneObj.phoneType = null;
        }
        phoneObj = { ...phoneObj, phone: value };
        phoneArr.push(phoneObj);
      });
    }

    const facility = new Facility({
      facilityName: facilityName,
      location: location,
      openHours: openHours,
      image: image,
      imageUrl: imageUrl,
      contact: [{ phone: phoneArr, email: email }],
      address: [
        { address: address, state: state, city: city, pincode: pincode },
      ],
      status: status,
    });

    facility.save((err, result) => {
      // console.log(err, result);
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Facility Add Successfully.",
          result
        );
      else {
        console.log(err);
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
  },
  edit: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Facility Id."
      );
    } else {
      const {
        facilityName,
        city,
        state,
        pincode,
        phone,
        phoneType,
        openHours,
        email,
        location,
        address,
        image,
        imageUrl,
        status,
      } = req.body;
      let phoneArr = [];
      if (phone) {
        phone.map((value, index) => {
          phoneObj = {};
          if (phoneType[index]) {
            phoneObj.phoneType = phoneType[index];
          } else {
            phoneObj.phoneType = null;
          }
          phoneObj = { ...phoneObj, phone: value };
          phoneArr.push(phoneObj);
        });
      }
      const editData = {
        facilityName: facilityName,
        location: location,
        openHours: openHours,
        image: image,
        imageUrl: imageUrl,
        contact: [
          {
            phone: phoneArr,
            email: email,
          },
        ],
        address: [
          { address: address, state: state, city: city, pincode: pincode },
        ],
        status: status,
      };
      //   console.log("editData", {$set: editData});
      Facility.findOneAndUpdate({ _id: req.body._id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          console.log(err);
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Facility Update Successfully.",
              result
            );
          } else
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
        });
    }
  },
  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Facility Id"
      );
    } else {
      Facility.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Facility Deleted Successfully",
              result
            );
          } else {
            console.log(err);
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          }
        });
    }
  },

  facilityById: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Facility Id."
      );
    } else {
      Facility.find({ _id: req.body._id })
        .populate("address.city", "_id name")
        .populate("address.state", "_id name")
        .lean()
        .exec((err, result) => {
          console.log(err);
          if (err)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          else if (!result || result.length == 0)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              "Facility Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Facility Found Successfully.",
              result
            );
        });
    }
  },

  facilityList: (req, res, next) => {
    const perPage = 10;
    page =
      req.body.page != "undefined" && req.body.page
        ? Math.max(0, req.body.page)
        : 1;
    var state = {
      path: "address.state",
      select: { _id: 1, name: 1, country: 1 },
    };
    var city = { path: "address.city", select: { _id: 1, name: 1, state: 1 } };
    let options = {
      page: page,
      limit: perPage,
      lean: true,
      populate: [state, city],
      sort: { createdAt: -1 },
    };
    let query = {};
    if (req.body.search && req.body.search != "")
      query = {
        ...query,
        facilityName: { $regex: `${req.body.search}`, $options: "i" },
      };

    if (req.body.status && req.body.status != "" && req.body.status != "all")
      query = {
        ...query,
        status: generalHelper.stringToUpperCase(req.body.status),
      };

    Facility.paginate(query, options, function (err, result) {
      console.log(err);
      if (err)
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      else if (!result || result.docs.length == 0)
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          "Facility Not Found."
        );
      else
        Response.sendResponseWithPagination(
          res,
          resCode.EVERYTHING_IS_OK,
          "Facility List.",
          result.docs,
          returnPagination(result)
        );
    });
  },
  changeStatus: (req, res, next) => {
    var STATUS = ["ACTIVE", "INACTIVE", "BLOCK"];
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Facility Id"
      );
    } else if (!req.body.status) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Facility Status"
      );
    } else if (!STATUS.includes(req.body.status)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Invalid  Facility Type"
      );
    } else {
      Facility.findOneAndUpdate(
        { _id: req.body._id },
        { status: req.body.status.toUpperCase() },
        { new: true }
      )
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Facility Status Changed Successfully.",
              result
            );
          } else
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
        });
    }
  },
  fileUpload: (req, res, next) => {
    var fileLocation = "public/uploads/facility";
    var fileFieldName = "image";
    var fileCount = 1;
    try {
      !fs.existsSync(`./${fileLocation}`) &&
        fs.mkdirSync(`./${fileLocation}`, { recursive: true });
    } catch (e) {
      console.log("Already Exist.");
    }

    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        console.log(file);
        // Uploads is the Upload_folder_name
        cb(null, fileLocation);
      },
      filename: function (req, file, cb) {
        // console.log(req.body, file);
        var extname = path.extname(file.originalname).toLowerCase();
        var imageName = file.fieldname + "-" + Date.now() + extname;
        console.log("imageName", imageName);
        req.body[file.fieldname] = imageName;
        req.body.imageUrl = fileLocation + "/" + imageName;

        cb(null, imageName);
      },
    });

    var upload = multer({
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: (req, file, cb) => {
        console.log(req.body, file);
        if (
          file.mimetype == "image/png" ||
          file.mimetype == "image/jpg" ||
          file.mimetype == "image/jpeg"
        ) {
          cb(null, true);
        } else {
          cb(null, false);
          // return new cb(new Error("Only/ .png, .jpg and .jpeg format allowed!"));
          req.file = {
            error: true,
            title: file.fieldname,
            msg: "Only .png, .jpg and .jpeg format allowed!",
            status: -6,
          };
        }
      },
      onFileSizeLimit: function (file) {
        req.file = {
          error: true,
          title: file.fieldname,
          msg: "Image file is to large",
          status: -6,
        };
      },
    }).fields([
      {
        name: "image",
        maxCount: 1,
      },
    ]);

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log("uploading_err", err);
        // A Multer error occurred when uploading.
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log("uploading_err", err);
      }
      // Everything went fine.

      next();
    });
  },
  getProviderBookedSlot: async (req, res) => {
    const { providerId } = req.body;
    if (!(await providerId))
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Enter service provider id."
      );
    await Appointment.find({
      provider: providerId,
      appointmentDate: {
        $gte: new Date(),
      },
    })
      .select("_id appointmentDate appointmentTime provider")
      .exec(async (err, result) => {
        console.log(err);
        if (err) {
          await Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        } else if (!result || result.length == 0) {
          await Response.sendResponseWithData(
            res,
            resCode.WENT_WRONG,
            "Booking list not found.",
            result
          );
        } else {
          appointmentResult = await appointmentHelper.manageProviderSlot(result);
          await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Booked time slot list.",
            appointmentResult
          );
        }
      });
  },
};

module.exports = facilityApis;
