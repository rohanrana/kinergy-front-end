const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const BillableItem = require("../models/billableItemModel");


var totalAmount = 0;
var taxAmount = 0;

const getFloatData = (result) => {
  let ItemData = result.map((item,index) => {
    // console.log('index',index,'item',item);
    return {
      _id: item._id,
      itemType: item.itemType,
      itemCode: item.itemCode,
      itemName: item.itemName,
      rate: Number(parseFloat(item.rate)).toFixed(2),
      tax: Number(parseFloat(item.tax)).toFixed(2),
      // taxAmount: Number(parseFloat(item.taxAmount)).toFixed(2),
      totalAmount: Number(parseFloat(item.totalAmount)).toFixed(2),
      status: item.status,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  });
  return ItemData;
};

const returnPagination = (result) =>{
  delete result.docs;
  return result;
}
const billableItemApis = {
  add: (req, res, next) => {
    const { itemType, itemName, itemCode, itemRate, itemTax, itemTotalAmount } =
      req.body;
    taxAmount = ((itemRate * itemTax) / 100).toFixed(2);
    // totalAmount = (parseFloat(itemRate) + parseFloat(taxAmount)).toFixed(2);
    const billableItemData = new BillableItem({
      itemType: itemType,
      itemName: itemName,
      itemCode: itemCode,
      rate: itemRate,
      tax: itemTax,
      totalAmount: itemTotalAmount,
      taxAmount: taxAmount,
    });
    // console.log("BillableItem", billableItemData);

    billableItemData.save((err, result) => {
      // console.log(err, result);
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Billable Item Add Successfully.",
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
        "Please Enter Item Id."
      );
    } else {
      const { taxName, taxRate, status } = req.body;
      const {
        itemType,
        itemName,
        itemCode,
        itemRate,
        itemTax,
        itemTotalAmount,
      } = req.body;
      taxAmount = ((itemRate * itemTax) / 100).toFixed(2);
      // totalAmount = (parseFloat(itemRate) + parseFloat(taxAmount)).toFixed(2);
      // console.log(parseFloat(itemRate).toFixed(2),' , ', parseFloat(itemTax));
      let billableItemData = {
        itemType: itemType,
        itemName: itemName,
        itemCode: itemCode,
        rate: itemRate,
        tax: itemTax,
        totalAmount: itemTotalAmount,
        taxAmount: taxAmount,
      };
      BillableItem.findOneAndUpdate({ _id: req.body._id }, billableItemData, {
        new: true,
      })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Billable Item Update Successfully.",
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
  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Item Id"
      );
    } else {
      BillableItem.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Item Deleted Successfully",
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

  billabelItemById: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Item Id."
      );
    } else {
      BillableItem.find({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          // console.log(result.length);
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
              "Item Not Found."
            );
          else {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Billable Item Found Successfully.",
              getFloatData(result)
            );
          }
        });
    }
  },

  getList: (req, res, next) => {
    const  perPage = 10  , page = req.params.page != 'undefined' && req.params.page?Math.max(0, req.params.page):1;
    // BillableItem.find({ status: "ACTIVE" })
    BillableItem.paginate({}, { page: page, limit: perPage }, function(err, result) {      
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
            "Billable Item Not Found."
          );
        else {
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Billable Item List .",
            getFloatData(result.docs),
            returnPagination(result)
          );
        }
      });
  },
  getSearchList: (req, res, next) => {

    const  perPage = 10  , page = req.params.page != 'undefined' && req.params.page?Math.max(0, req.params.page):1;
    let itemType ={};
    if(req.body.search !== undefined && req.body.search){
    itemType = {...itemType, itemName: { $regex: `${req.body.search}`, $options: "i" } }
    }
    if(req.body.itemType !== undefined && req.body.itemType){
      itemType = {...itemType, itemType: req.body.itemType }
    }
    if(req.body.status !== undefined && req.body.status){
      itemType = {...itemType, status: req.body.status.toUpperCase() }
    }
    BillableItem.paginate(itemType, { page: page, limit: perPage }, function(err, result) {
      // console.log('result',result);
      if (err) {
              Response.sendResponseWithoutData(
                res,
                resCode.WENT_WRONG,
                resMessage.WENT_WRONG
              );
            } else if (!result || result.length == 0)
              Response.sendResponseWithoutData(
                res,
                resCode.WENT_WRONG,
                "Billable Item Not Found."
              );
            else {
              Response.sendResponseWithPagination(
                res,
                resCode.EVERYTHING_IS_OK,
                "Billable Item List .",
                getFloatData(result.docs),
                 returnPagination(result)
                // result.docs
              );
            }
    })
  },
  changeStatus: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Billable Item Id"
      );
    } else if (!req.body.status) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Billable Item Status"
      );
    } else {
      BillableItem.findOneAndUpdate(
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
              "Billable Item Status Changed Successfully.",
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
};

module.exports = billableItemApis;
