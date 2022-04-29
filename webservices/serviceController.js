const Service = require('../models/serviceModel');
const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
var slugify = require('slugify');
const { edit } = require('../Validators/staffValidator');
const path = require('path');

const multer = require('multer')
const serviceValidator = require('../Validators/serviceValidator');
const fs = require('fs');
const maxSize = 1 * 1024 * 1024;
const serviceApis = {

    // ===============Add Service List ==========================

    'add': (req, res) => {
        req.body.slug = slugify(req.body.title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let service = new Service({
            title: req.body.title,
            subTitle: req.body.subTitle,
            desription: req.body.description,
            banner: req.body.banner,
            logo: req.body.logo,
            slug: req.body.slug
        });
        service.save((err, result) => {
            // console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Save Successfully.', result);
            else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
        });
    },

    // =============get Service List=============================

    'getList': (req, res) => {
        Service.find().lean().exec((err, result) => {
            if (err)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result || result.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Services Not Found.');
            else
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service List.', result);
        });
    },

    //============= get Service By Id =========================

    'getServiceById': (req, res) => {
        if (!req.params.serviceId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id.');
        } else {
            Service.find({ _id: req.params.serviceId }).lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Service Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Found Successfully.', result);
            });
        }

    },

    //============= edit Service By Id =========================

    'edit': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id.');
        } else {
            const editData = {
                title: req.body.title,
                subTitle: req.body.subTitle,
                desription: req.body.description,
                banner: req.body.banner,
                logo: req.body.logo,
                slug: req.body.slug

            }

            Service.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    if (req.body.oldLogoImage != 'undefined' && req.body.oldLogoImage != null && req.body.logo != 'undefined' && req.body.logo != null) {
                        let filePath = 'public/uploads/service/' + '/' + req.body.oldLogoImage;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if (req.body.oldBannerImage != 'undefined' && req.body.oldBannerImage != null && req.body.banner != 'undefined' && req.body.banner != null) {
                        let filePath = 'public/uploads/service/' + '/' + req.body.oldBannerImage;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Update Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }
    },

    //============= edit Service By Id =========================

    'delete': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id');
        } else {
            Service.findOneAndDelete({ _id: req.body._id }).lean().exec((err, result) => {
                if (!err) {
                    if (req.body.oldLogoImage != 'undefined' && req.body.oldLogoImage != null) {
                        let filePath = 'public/uploads/service/' + '/' + req.body.oldLogoImage;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if (req.body.oldBannerImage != 'undefined' && req.body.oldBannerImage != null) {
                        let filePath = 'public/uploads/service/' + '/' + req.body.oldBannerImage;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Deleted Successfully', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }
    },
    'changeStatus': (req, res, next) => {
        var STATUS = ["ACTIVE", "INACTIVE", "BLOCK"];
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Status');
        } else if (!STATUS.includes(req.body.status)) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Invalid  Status Type');
        } else {
            Service.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Status Changed Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }

    },
    'fileUpload': (req, res, next) => {


        var storage = multer.diskStorage({
            destination: function(req, file, cb) {
                // console.log(file);
                // Uploads is the Upload_folder_name
                if (file.fieldname == 'logo') {
                    cb(null, "public/uploads/service")
                } else if (file.fieldname == 'banner') {
                    cb(null, "public/uploads/service")
                } else {
                    cb(null, "public/uploads/")
                }
            },
            filename: function(req, file, cb) {
                // console.log(req.body, file);
                var extname = path.extname(file.originalname).toLowerCase();
                var imageName = file.fieldname + "-" + Date.now() + extname
                    // console.log(imageName);
                req.body[file.fieldname] = imageName;
                cb(null, imageName)
            }
        })


        var upload = multer({
            storage: storage,
            limits: { fileSize: maxSize },
            fileFilter: (req, file, cb) => {
                // console.log(req.body, file);
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
                        status: -6
                    }


                }

            },
            onFileSizeLimit: function(file) {
                req.file = {
                    error: true,
                    title: file.fieldname,
                    msg: "Image file is to large",
                    status: -6
                }
            }
        }).fields([{
            name: 'logo',
            maxCount: 1
        }, {
            name: 'banner',
            maxCount: 1
        }]);


        upload(req, res, function(err) {
            if (err instanceof multer.MulterError) {
                console.log('uploading_err', err);
                // A Multer error occurred when uploading.
            } else if (err) {
                // An unknown error occurred when uploading.
                console.log('uploading_err', err);
            }
            // Everything went fine. 

            next()
        })
    }
}

module.exports = serviceApis;