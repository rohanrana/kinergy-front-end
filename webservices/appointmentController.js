const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
const Appointment = require('../models/appointmentModel');


const STATUS = ["UPCOMING", "COMPLETE", "CANCEL", "PENDING"];
const moment = require('moment');

const appointmentApis = {
    'book': (req, res, next) => {
        console.log(req.body);
        const { appointmentDate, appointmentTime, spentTime, serviceType, staff, customer, status } = req.body;
        const appointment = new Appointment({
            appointmentDate: moment(appointmentDate).format("YYYY-MM-DD"),
            appointmentTime,
            spentTime,
            serviceType,
            staff,
            customer,
            status
        });
        console.log('appointment', appointment);

        appointment.save((err, result) => {
            console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment Add Successfully.', result);
            else {
                console.log(err);
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            }
        });
    },
    'edit': (req, res, next) => {
        console.log(Appointment.STATUS);
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Appointment Id.');
        } else {
            const { appointmentDate, appointmentTime, spentTime, serviceType, staff, customer, status } = req.body;
            const editData = {
                appointmentDate: moment(appointmentDate).format("YYYY-MM-DD"),
                appointmentTime,
                spentTime,
                serviceType,
                staff,
                customer,
                status
            };
            Appointment.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment Update Successfully.', result);
                } else {
                    console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                }


            });
        }
    },
    'getList': (req, res, next) => {
        Appointment.find().populate("customer", { _id: 1, firstName: 1, lastName: 1, contact: 1, email: 1, type: 1, address: 1 }).populate('staff', { _id: 1, firstName: 1, lastName: 1, contact: 1, email: 1, type: 1, address: 1 }).lean().exec((err, result) => {
            console.log(err);
            if (err)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result || result.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Appointment Not Found.');
            else
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment List .', result);
        });
    },
    'appointmentById': (req, res, next) => {
        if (!req.params.appointmentId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Appointment Id.');
        } else {
            Appointment.find({ _id: req.params.appointmentId }).populate('customer').populate("staff").lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Appointment Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment Found Successfully.', result);
            });
        }
    },
    'appointmentByCustomerId': (req, res, next) => {
        if (!req.params.customerId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Customer Id.');
        } else {
            Appointment.find({ customer: req.params.customerId }).populate('customer').populate("staff").lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Customer Appointment Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Customer Appointment Found Successfully.', result);
            });
        }
    },
    'appointmentByStaffId': (req, res, next) => {
        if (!req.params.staffId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Staff Id.');
        } else {
            Appointment.find({ staff: req.params.staffId }).populate('customer').populate("staff").lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Staff Appointment Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Staff AppointmentjjsdfjsdjfFound Successfully.', result);
            });
        }
    },
    'delete': (req, res) => {
        if (!req.params.appointmentId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Appointment Id');
        } else {
            Appointment.findOneAndDelete({ _id: req.params.appointmentId }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment Deleted Successfully', result);
                } else {
                    console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

                }
            });
        }
    },
    'changeStatus': (req, res, next) => {

        if (!req.params.appointmentId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Appointment Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Appointment Status');
        } else {
            Appointment.findOneAndUpdate({ _id: req.params.appointmentId }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment Status Changed Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });

        }

    }

}

module.exports = appointmentApis;