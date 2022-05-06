const ServiceCategory = require('../models/serviceCategoryModel');
const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
var slugify = require('slugify');
const path = require('path');

const multer = require('multer')
const fs = require('fs');
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
delete result.docs;
return result;
};

const serviceCategoryApis = {

    // ===============Add Service Category List ==========================

    'add': (req, res) => {
        const {title,description,image,status,addBy} = req.body;
        const slug = slugify(title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let serviceCategory = new ServiceCategory({
            title:title,
            description: description,
            image:image,
            slug: slug,
            addBy:addBy,
            status:status
        });
        serviceCategory.save((err, result) => {
            // console.log(err, result);
            if (!err)   
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Category Save Successfully.', result);
            else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
        });
    },
    // =============== Edit Service Category List ==========================

    'edit': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Id.');
        } else {
        const {title,description,image,status,addBy} = req.body;
        const slug = slugify(title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let serviceCategoryData = {
            title:title,
            description: description,
            image:image,
            slug: slug,
            addBy:addBy,
            status:status
        };
        ServiceCategory.findOneAndUpdate({ _id: req.body._id }, serviceCategoryData, { new: true }).lean().exec((err, result) => {
            if (!err) {
                if (req.body.oldImage != 'undefined' && req.body.oldImage != null && req.body.image != 'undefined' && req.body.image != null) {
                    let filePath = 'public/uploads/service/category' + '/' + req.body.oldImage;
                    fs.unlink(filePath, function(err) {
                        if (!err) console.log('removed');
                    });
                }
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Category Update Successfully.', result);
            } else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

        });
    }
    },

    // =============get Service Category List=============================

    'getList': (req, res) => {
        const perPage = 10,
        page =  req.body.page != "undefined" && req.body.page ? Math.max(0, req.body.page) : 1;
            ServiceCategory.paginate({},{page: page, limit: perPage,select:"_id title slug description image addBy status createdAt updatedAt" },function (err, result) {
                console.log(err);
            if (err)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result || result.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Service Categorys Not Found.');
            else
                Response.sendResponseWithPagination(res, resCode.EVERYTHING_IS_OK, 'Service Category List.', result.docs,returnPagination(result));
        });
    },

    //============= get Service Category By Id =========================

    'getListById': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Category Id.');
        } else {
            ServiceCategory.find({ _id: req.body._id }).lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Service Category Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Category Found Successfully.', result);
            });
        }

    },

 

    //============= edit Service Category By Id =========================

    'delete': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Category Id');
        } else {
            ServiceCategory.findOneAndDelete({ _id: req.body._id }).lean().exec((err, result) => {
                if (!err) {
                    if (req.body.oldImage != 'undefined' && req.body.oldImage != null) {
                        let filePath = 'public/uploads/service/category' + '/' + req.body.oldImage;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Category Deleted Successfully', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }
    },
    'changeStatus': (req, res, next) => {
        
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Category Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Service Category Status');
        }  else {
            ServiceCategory.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Category Status Changed Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }

    },
    'fileUpload': (req, res, next) => {


        var storage = multer.diskStorage({
            destination: function(req, file, cb) {
                // console.log(file);
                    cb(null, "public/uploads/service/category")              
            },
            filename: function(req, file, cb) {
                // console.log(req.body, file);
                var extname = path.extname(file.originalname).toLowerCase();
                var imageName = "service-" + Date.now() + extname
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

module.exports = serviceCategoryApis;