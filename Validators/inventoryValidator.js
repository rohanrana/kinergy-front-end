const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
const Tax = require('../models/taxModel');
const Inventory = require('../models/productModel');
var fs = require('fs');

var ObjectId = require('mongoose').Types.ObjectId;
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
    check('name')
    .custom((value, {req, loc, path}) => {
        let userOptions = {};
        userOptions = {...userOptions,name:value};

        console.log('userOptions',userOptions);
        return Inventory.findOne(userOptions).then(inventory => {
            
            if (inventory) {
                return Promise.reject(resMessage.ALL_READY_EXIST_NAME);
            }
        })
    })
    .trim()   
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_NAME_REQUIRED),
    // check('description')
    // .trim()
    // .escape()
    // .not()
    // .isEmpty()
    // .withMessage(resMessage.INVENTORY_CODE_DESCRIPTION),
    check('code')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_CODE_REQUIRED),
    check('quantity')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_QUANTITY_REQUIRED),
    check('tax')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_TAX_REQUIRED),
    check('price')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_PRICE_REQUIRED),
    check('totalAmount')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_TOTAL_REQUIRED)

]
const generateEditValidation = (req, res, next) => [
    check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_NAME_REQUIRED),
    // check('description')
    // .trim()
    // .escape()
    // .not()
    // .isEmpty()
    // .withMessage(resMessage.INVENTORY_CODE_DESCRIPTION),
    check('code')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_CODE_REQUIRED),
    check('quantity')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_QUANTITY_REQUIRED),
    check('tax')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_TAX_REQUIRED),
    check('price')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_PRICE_REQUIRED),
    check('totalAmount')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.INVENTORY_TOTAL_REQUIRED)


]

const reporter = (req, res, next) => {


      // ================== IF FILE ERROR =============
      console.log(req.file);
      if (req.files.length > 0 ) {
  
          if (req.file.error != 'undefined' && req.file.error == true && req.file && req.files ) {
  
              for (let i = 0; i < Object.keys(req.files).length; i++) {
                  // console.log('files', i, req.files);
                  let fieldname = Object.keys(req.files)[i];
                  let filePath = 'public/uploads/inventory' + '/' + req.body[fieldname];
                  // console.log('path', filePath)
                  fs.unlink(filePath, function(err) {
                      if (!err) {
                          console.log('removed');         
                      } else {
                          console.log('removing_file_error', err);
                      }
                  });
              }
              // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
              //     errors: req.file
              // });
              Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', req.file);
          }
      }
      // ==================

      
    var errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        if(req.files.length > 0){
        if (req.files != 'undefined' && req.files != null) {
            for (let i = 0; i < Object.keys(req.files).length; i++) {

                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/inventory/' + '/' + req.body[fieldname];
                fs.unlink(filePath,
                    function(err) {
                        if (!err) {
                            console.info(`removed`);
                        }
                    });

            }
        }
    }

        const errorMessages = errors.array().map(error => ({
            title: error.param,
            msg: error.msg
        }));
        const dedupThings = Array.from(errorMessages.reduce((m, t) => m.set(t.title, t), new Map()).values());
        // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
        //     errors: dedupThings
        // });
        Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', dedupThings);
    }else{
        next();
    }
    
}

module.exports = {
    add: [
        generateAddValidation(),
        reporter
    ],
    edit: [
        generateEditValidation(),
        reporter
    ]
}