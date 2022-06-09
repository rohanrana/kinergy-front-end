const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const accessLevelApis = require('../webservices/accessLevel/accessLevelFeatureController');

const accessLevelFeatureValidator = require('../Validators/accessLevelFeatureValidator');

router.post('/addFeature', authHandler.auth_func, accessLevelFeatureValidator.add, accessLevelApis.addFeature);
router.post('/editFeature', authHandler.auth_func, accessLevelFeatureValidator.edit, accessLevelApis.editFeature);
router.post('/featureList', authHandler.auth_func, accessLevelApis.featureList);
router.post('/getFeatureById', authHandler.auth_func, accessLevelApis.getFeatureById);
router.post('/delete', authHandler.auth_func, accessLevelApis.deleteFeature);

module.exports = router;