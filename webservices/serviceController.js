const Service = require('../models/serviceModel');
const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
const {SERVICE_STATUS} = require('../helper/statusLists');
var slugify = require('slugify');
const { edit } = require('../Validators/staffValidator');
const path = require('path');

const multer = require('multer')
const serviceValidator = require('../Validators/serviceValidator');
const fs = require('fs');
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
delete result.docs;
return result;
};

const serviceApis = {

    // ===============Add Service List ==========================

    'add': (req, res) => {
        const {title,description,image,status,addBy,category,haveSubService,price,duration} = req.body;
        let priceArr = [];
        if (price) {
          price.map((value, index) => {
            priceObj = {};
            if (duration[index]) {
              priceObj.duration = duration[index];
            } else {
              priceObj.duration = null;
            }
            priceObj = { ...priceObj, price: value };
            priceArr.push(priceObj);
          });
        }
        const slug = slugify(title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let service = new Service({
            category:category,
            haveSubService:haveSubService,
            title:title,
            description: description,
            image:image,
            slug: slug,
            addBy:addBy,
            status:status,
            priceDetail:priceArr
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
        const perPage = 10,
        page =  req.params.page != "undefined" && req.params.page ? Math.max(0, req.params.page) : 1;
        
            Service.paginate({},{page: page, limit: perPage },function (err, result) {
                console.log(err);
            if (err)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result || result.docs.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Services Not Found.');
            else
                Response.sendResponseWithPagination(res, resCode.EVERYTHING_IS_OK, 'Service List.', result.docs,returnPagination(result));
        });
    },

    //============= get Service By Id =========================

    'getListById': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id.');
        } else {
            Service.find({ _id: req.body._id}).lean().exec((err, result) => {
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
            const {title,description,image,status,addBy,category,haveSubService,price,duration} = req.body;
        let priceArr = [];
        if (price) {
          price.map((value, index) => {
            priceObj = {};
            if (duration[index]) {
              priceObj.duration = duration[index];
            } else {
              priceObj.duration = null;
            }
            priceObj = { ...priceObj, price: value };
            priceArr.push(priceObj);
          });
        }
        const slug = slugify(title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let editData ={
            category:category,
            haveSubService:haveSubService,
            title:title,
            description: description,
            image:image,
            slug: slug,
            addBy:addBy,
            status:status,
            priceDetail:priceArr
        };

            Service.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    if (req.body.oldImage != 'undefined' && req.body.oldImage != null && req.body.image != 'undefined' && req.body.image != null) {
                        let filePath = 'public/uploads/service/' + '/' + req.body.oldImage;
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
                    if (req.body.oldImage != 'undefined' && req.body.oldImage != null) {
                        let filePath = 'public/uploads/service/' + '/' + req.body.oldImage;
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
        
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Status');
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
                    cb(null, "public/uploads/service")
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
            name: 'image',
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