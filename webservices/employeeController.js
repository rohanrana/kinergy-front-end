const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
const Employee = require('../models/employeeModel');
const path = require('path');
const fs = require('fs');

const multer = require('multer');
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
    delete result.docs;
    return result;
    };

const employeeApis = {
    'add': (req, res, next) => {
        const { firstName, lastName, nickName, dob, gender, ssn, phone1, phone2, email, addressLine, city, state, pincode, autoReminder, appointConfirm, role, ssnDocument, driverLicense, workPermit } = req.body;
        const employee = new Employee({
            firstName: firstName,
            lastName: lastName,
            nickName: nickName,
            dob: dob,
            gender: gender,
            ssn: ssn,
            phone1: phone1,
            phone2: phone2,
            email: email,
            addressLine: addressLine,
            city: city,
            state: state,
            pincode: pincode,
            autoReminder: autoReminder,
            appointConfirm: appointConfirm,
            role: role,
            ssnDocument: ssnDocument,
            driverLicense: driverLicense,
            workPermit: workPermit
        });

        employee.save((err, result) => {
            // console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Employee Add Successfully.', result);
            else {
                // console.log(err);
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            }
        });
    },
    'edit': (req, res, next) => {

        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Employee Id.');
        } else {
            let { firstName, lastName, nickName, dob, gender, ssn, phone1, phone2, email, addressLine, city, state, pincode, autoReminder, appointConfirm, role, ssnDocument, driverLicense, workPermit } = req.body;
            var editData = {
                firstName: firstName,
                lastName: lastName,
                nickName: nickName,
                dob: dob,
                gender: gender,
                ssn: ssn,
                phone1: phone1,
                phone2: phone2,
                email: email,
                addressLine: addressLine,
                city: city,
                state: state,
                pincode: pincode,
                autoReminder: autoReminder,
                appointConfirm: appointConfirm,
                role: role,
                ssnDocument: ssnDocument,
                driverLicense: driverLicense,
                workPermit: workPermit
            }
            Employee.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    if ((req.body.oldSsnDocument !== 'undefined' || req.body.oldSsnDocument !== null) && (req.body.ssnDocument !== 'undefined' || req.body.sSsnDocument !== null)) {
                        let filePath = 'public/uploads/employee/' + '/' + req.body.oldSsnDocument;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if ((req.body.oldDriverLicense !== 'undefined' && req.body.oldDriverLicense !== null) && (req.body.driverLicense !== 'undefined' && req.body.driverLicense !== null)) {
                        let filePath = 'public/uploads/employee/' + '/' + req.body.oldDriverLicense;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if ((req.body.oldWorkPermit !== 'undefined' && req.body.oldWorkPermit !== null) && (req.body.workPermit !== 'undefined' && req.body.workPermit !== null)) {
                        let filePath = 'public/uploads/employee/' + '/' + req.body.oldWorkPermit;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Employee Update Successfully.', result);
                } else {
                    // console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                }

            });
        }
    },
    'editDocument': (req, res, next) => {

        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Employee Id.');
        } else {
            let { ssnDocument, driverLicense, workPermit } = req.body;
            var editData = {
                ssnDocument: ssnDocument,
                driverLicense: driverLicense,
                workPermit: workPermit
            }
            Employee.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    if ((req.body.oldSsnDocument !== 'undefined' || req.body.oldSsnDocument !== null) && (req.body.ssnDocument !== 'undefined' || req.body.sSsnDocument !== null)) {
                        let filePath = 'public/uploads/employee/' + '/' + req.body.oldSsnDocument;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if ((req.body.oldDriverLicense !== 'undefined' && req.body.oldDriverLicense !== null) && (req.body.driverLicense !== 'undefined' && req.body.driverLicense !== null)) {
                        let filePath = 'public/uploads/employee/' + '/' + req.body.oldDriverLicense;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if ((req.body.oldWorkPermit !== 'undefined' && req.body.oldWorkPermit !== null) && (req.body.workPermit !== 'undefined' && req.body.workPermit !== null)) {
                        let filePath = 'public/uploads/employee/' + '/' + req.body.oldWorkPermit;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Employee Update Successfully.', result);
                } else {
                    // console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                }

            });
        }
    },
    'delete': (req, res, next) => {

        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Employee Id.');
        } else {
            Employee.findOneAndDelete({ _id: req.body._id }).lean().exec((err, result) => {
                if (!err) {
                    if (req.body.oldSsnDocument !== 'undefined' && req.body.oldSsnDocument !== null) {
                        var filePath = 'public/uploads/employee/' + '/' + req.body.oldSsnDocument;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if (req.body.oldDriverLicense !== 'undefined' && req.body.oldDriverLicense !== null) {
                        var filePath = 'public/uploads/employee/' + '/' + req.body.oldDriverLicense;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    if (req.body.oldWorkPermit !== 'undefined' && req.body.oldWorkPermit !== null) {
                        var filePath = 'public/uploads/employee/' + '/' + req.body.oldWorkPermit;
                        fs.unlink(filePath, function(err) {
                            if (!err) console.log('removed');
                        });
                    }
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Employee Deleted Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }
    },
    'employeeById': (req, res, next) => {
        if (!req.params.employeeId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Employee Id.');
        } else {
            Employee.find({ _id: req.params.employeeId }).populate('role').lean().exec((err, result) => {

                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Employee Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Employee Found Successfully.', result);
            });
        }
    },
    'employeeList': (req, res, next) => {
        const perPage = 10;
        page =  req.params.page != "undefined" && req.params.page ? Math.max(0, req.params.page) : 1;
        // Employee.find().lean().exec((err, result) => {
            Employee.paginate({},{page: page, limit: perPage },function (err, result) {
            if (err) {
                console.log(err);
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            } else if (!result || result.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Employee Not Found.');
            else
            Response.sendResponseWithPagination(res, resCode.EVERYTHING_IS_OK, 'Employee List.', result.docs,returnPagination(result));
        });
    },
    'changeStatus': (req, res, next) => {
        var STATUS = ["ACTIVE", "INACTIVE", "BLOCK"];
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Employee Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Employee Status');
        } else if (!STATUS.includes(req.body.status)) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Invalid  Employee Type');
        } else {
            Employee.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Employee Status Changed Successfully.', result);
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
                cb(null, "public/uploads/employee")

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
                if (file.fieldname == 'ssnDocument') {
                    if (file.mimetype == "application/pdf") {
                        cb(null, true);
                    } else {
                        cb(null, false);
                        // return new cb(new Error("Only/ .png, .jpg and .jpeg format allowed!"));
                        req.file = {
                            error: true,
                            title: file.fieldname,
                            msg: "Only .pdf format allowed!",
                            status: -6
                        }
                    }
                } else {
                    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
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

                }


            },
            onFileSizeLimit: function(file) {
                if (file.fieldname == 'ssnDocument') {
                    req.file = {
                        error: true,
                        title: file.fieldname,
                        msg: "Document file is to large",
                        status: -6
                    }
                } else {
                    req.file = {
                        error: true,
                        title: file.fieldname,
                        msg: "Image file is to large",
                        status: -6
                    }
                }
            }
        }).fields([{
            name: 'ssnDocument',
            maxCount: 1
        }, {
            name: 'driverLicense',
            maxCount: 1
        }, {
            name: 'workPermit',
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

module.exports = employeeApis;