const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const inventoryApis =  require('../webservices/inventoryController');

const inventoryValidator = require('../validators/inventoryValidator');

router.post('/add',inventoryApis.fileUpload, authHandler.auth_func, inventoryValidator.add, inventoryApis.add);
router.post('/edit',inventoryApis.fileUpload, authHandler.auth_func, inventoryValidator.edit, inventoryApis.edit);
router.post('/inventoryList', authHandler.auth_func, inventoryApis.getList);
router.post('/inventorySearchList', authHandler.auth_func, inventoryApis.getSearchList);
router.post('/changeStatus', authHandler.auth_func, inventoryApis.changeStatus);
router.post('/changeStockStatus', authHandler.auth_func, inventoryApis.changeStockStatus);
router.post('/inventoryById', authHandler.auth_func, inventoryApis.inventoryById);
router.post('/delete', authHandler.auth_func, inventoryApis.delete);


module.exports = router;