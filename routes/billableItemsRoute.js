const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const billableItemApis =  require('../webservices/billableItemsController');
const billableItemValidator = require('../Validators/billableItemsValidator');

router.post('/add', authHandler.auth_func, billableItemValidator.add, billableItemApis.add);
router.post('/edit', authHandler.auth_func, billableItemValidator.edit, billableItemApis.edit);
router.post('/billabelItemList', authHandler.auth_func, billableItemApis.getList);
router.post('/billabelItemSearchList', authHandler.auth_func, billableItemApis.getSearchList);
router.post('/changeStatus', authHandler.auth_func, billableItemApis.changeStatus);
router.post('/billabelItemById', authHandler.auth_func, billableItemApis.billabelItemById);
router.post('/delete', authHandler.auth_func, billableItemApis.delete);


module.exports = router;