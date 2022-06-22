const Response = require("../../common_functions/response_handler");
const resCode = require("../../helper/httpResponseCode");
const resMessage = require("../../helper/httpResponseMessage");
const generalHelper = require("../../helper/general");

const Level = require("../../models/accessLevelModel");
const Groups = require("../../models/permissionGroupModel");
const Feature = require("../../models/featureModel");
const Permission = require("../../models/permissionModel");



const permissionToGroupPush = (groupId, permissionId) => {
    Groups.findByIdAndUpdate(
      { _id: groupId },
      { $addToSet: { permissions: permissionId } },
      { new: true, useFindAndModify: false }
    ).lean().exec();
  };

  const permissionToFeaturePush = (featureId, permissionId) => {
    Feature.findByIdAndUpdate(
      { _id: featureId },
      { $addToSet: { permissions: permissionId } },
      { new: true, useFindAndModify: false }
    ).lean().exec();
  };
  

  const permissionToGroupPop = async (groupId, permissionId) => {
    Groups.findByIdAndUpdate(
      { _id: groupId },
      { $pull: { permissions: permissionId } },
    )
      .lean().exec();
  };
  const permissionToFeaturePop = async (featureId, permissionId) => {
    Feature.findByIdAndUpdate(
      { _id: featureId },
      { $pull: { permissions: permissionId } },
    )
      .lean().exec();
  };
  
const addPermission = async (req, res) => {
    const { name,sort,status,group,feature,capabilities} = req.body;
   
    const permissionData = new Permission({
        name:name,
        permissionSlug:generalHelper.slugify(name),
        sort:sort,
        status:status,
        group: group,
        feature: feature,
        capabilities:    capabilities
    });
    await  permissionData.save(async (err, result) => {
      if(await result){          
        var permissionId = await result._id;
        permissionToGroupPush(group, permissionId);
        permissionToFeaturePush(feature, permissionId);
        Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK, 'Permission Add Successfully', result);
      }else {        
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
       }
      
    });
  };

const editPermission = async (req,res)=>{
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Permission Id');
  } else {
    const { name,sort,status,group,feature,capabilities} = req.body;
   
    const permissionData = {
        name:name,
        permissionSlug:generalHelper.slugify(name),
        sort:sort,
        status:status,
        group: group,
        feature: feature,
        capabilities:    capabilities
    };
      
      Permission.findOneAndUpdate({ _id: req.body._id },permissionData, { new: true }).lean().exec((err, result) => {
            if (!err) {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Update Successfully.', result);
            } else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

        });

    
  }
}

const permissionList = async(req,res)=> {
  await Permission.find({}).sort({sort:1})
  .exec((err, result) => {
    // console.log(err, result);
    if (err) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
    } else if (!result || result.length == 0) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Permission Not Found.");
    } else {
        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Data.', result);     
    }
  });
}
//  Get Group Detail POST
const getPermissionById = async(req,res)=> {
  if (!req.body._id) {
    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Permission Id.');
} else {
        await Permission.find({_id:req.body._id}).sort({sort:1})
        .exec((err, result) => {
          // console.log(err, result);
          if (err) {
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
          } else if (!result || result.length == 0) {
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Permission Not Found.");
          } else {
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Data.', result);     
          }
        });
     }
}



// Delete POST 


const deletePermission  = async (req, res) => {
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Permission Id.');
  } else {
      await Permission.find({_id:req.body._id}).lean().exec(async (fErr,fResult)=>{
          console.log('fErr',fErr,'fResult',fResult);
          if(fResult && fResult.length > 0){
                await  Permission.findOneAndDelete({ _id: req.body._id }).lean().exec(async (err, result) => { 
                    console.log('err',err,'result',result);
                    var resultData = await result;
                    if (resultData) {            
                        permissionToGroupPop(fResult[0].group,req.body._id);
                        permissionToFeaturePop(fResult[0].feature,req.body._id);
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Deleted Successfully', result);
                    } else {              
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
        
                    }
                });
            }else{
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Permission Not Found.');
            }
      });
        
  }
}

module.exports = {
    addPermission,
    editPermission,
    permissionList,
    deletePermission,
    getPermissionById
};
