const Service = require('../models/serviceModel');
const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
var slugify = require('slugify');
const { edit } = require('../Validators/staffValidator');
const path = require('path');

const multer = require('multer')
const serviceValidator = require('../Validators/serviceValidator');
// const upload = multer({ dest: 'public/upload/service/' });


const serviceApis = {

    // ===============Add Service List ==========================

    'add': (req, res) => {

        req.body.slug = slugify(req.body.title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let service = new Service(req.body);
        service.save((err, result) => {
            // console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Save Successfully.', result);
            else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG + '123');
        });
        // return serviceValidator.add;


        // var storage = multer.diskStorage({
        //     destination: function(req, file, cb) {
        //         // Uploads is the Upload_folder_name
        //         cb(null, "public/upload/service")
        //     },
        //     filename: function(req, file, cb) {
        //         // console.log(file);
        //         var extname = path.extname(file.originalname).toLowerCase();
        //         var imageName = file.fieldname + "-" + Date.now() + extname
        //         req.body.image = imageName;
        //         cb(null, imageName)
        //     }
        // })
        // const maxSize = 1 * 1000 * 1000;

        // var upload = multer({
        //     storage: storage,
        //     limits: { fileSize: maxSize },
        //     fileFilter: (req, file, cb) => {
        //         if (
        //             file.mimetype == "image/png" ||
        //             file.mimetype == "image/jpg" ||
        //             file.mimetype == "image/jpeg"
        //         ) {
        //             cb(null, true);
        //         } else {
        //             cb(null, false);
        //             return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        //         }
        //     }


        // }).single("mypic");
        // // Error MiddleWare for multer file upload, so if any
        // // error occurs, the image would not be uploaded!
        // upload(req, res, function(err) {
        //     console.log(req.body);
        //     if (err) {
        //         res.send(err)
        //     } else {
        //         req.body.slug = slugify(req.body.title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        //         let service = new Service(req.body);
        //         service.save((err, result) => {
        //             // console.log(err, result);
        //             if (!err)
        //                 Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Save Successfully.', result);
        //             else
        //                 Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG + '123');
        //         });
        //     }
        // })




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
                "title": req.body.title,
                "subTitle": req.body.subTitle,
                "slug": slugify(req.body.title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true }),
                "description": req.body.description,
                "status": req.body.status

            }
            if (req.files && req.files.image !== "undefined") {
                let image = req.files.image;
                var timestamp = new Date().getTime();
                filename = timestamp + '-' + image.name;
                editData.image = filename;
                image.mv('public/upload/service/' + filename, function(err) {
                    if (err) {
                        console.log(err);
                        req.flash('error', 'Could not upload image. Please try again!')
                        res.locals.message = req.flash();
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Could not upload image. Please try again!');
                    }
                });
            }

            Service.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err)
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Update Successfully.', result);
                else
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
                if (!err)
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Deleted Successfully', result);
                else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }
    }
}

module.exports = serviceApis;