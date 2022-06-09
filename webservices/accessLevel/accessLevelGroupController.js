const Response = require("../../common_functions/response_handler");
const resCode = require("../../helper/httpResponseCode");
const resMessage = require("../../helper/httpResponseMessage");
const generalHelper = require("../../helper/general");

const Level = require("../../models/accessLevelModel");
const Groups = require("../../models/permissionGroupModel");
const Feature = require("../../models/featureModel");
const Permission = require("../../models/permissionGroupModel");

var ObjectId = require("mongoose").Types.ObjectId;
const log = console.log;

const LevelPermission = require("../../models/levelPermissionsModel");
const permissionHelper = require('../../helper/permissions');



const addGroup = async (req, res) => {
    const { name,sort,status} = req.body;
   
    const accessLevel = new Groups({
        name:name,
        groupSlug:generalHelper.slugify(name),
        sort:sort,
        status:status        
    });
    await  accessLevel.save(async (err, result) => {
      if(await result){          
        Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK, 'Group Add Successfully', result);
      }else {        
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
       }
      
    });
  };

const editGroup = async (req,res)=>{
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Access Level Group Id');
  } else {
    const { name,sort,status} = req.body;
    const groupData = {
          name:name,
          groupSlug:generalHelper.slugify(name),
          sort:sort,
          status:generalHelper.stringToUpperCase(status)        
      };
      
      Groups.findOneAndUpdate({ _id: req.body._id },groupData, { new: true }).lean().exec((err, result) => {
            if (!err) {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Access Level Group Update Successfully.', result);
            } else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

        });

    
  }
}

const groupList = async(req,res)=> {
  await Groups.find({}, { _id: 1,name: 1,groupSlug:1 }).sort({sort:1})
  .exec((err, result) => {
    // console.log(err, result);
    if (err) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
    } else if (!result || result.length == 0) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Group Not Found.");
    } else {
        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Group Data.', result);     
    }
  });
}
//  Get Group Detail POST
const getGroupById = async(req,res)=> {
  if (!req.body._id) {
    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Group Id.');
} else {
        await Groups.find({_id:req.body._id}).sort({sort:1})
        .exec((err, result) => {
          // console.log(err, result);
          if (err) {
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
          } else if (!result || result.length == 0) {
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Group Not Found.");
          } else {
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Group Data.', result);     
          }
        });
     }
}



// Delete POST 


const deleteGroup  = async (req, res) => {
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Group Id.');
  } else {
        // await Groups.find({_id:req.body._id}).lean().exec(async (err,result)=>{
        //   if(await result.feature){
        //     if(result.feature.length > 0){
        //         var featurePromise = result.feature.map(async (fId,x)=>{                 
        //           await Feature.deleteMany({_id:fId}).exec();
        //         });
        //         var featureDeletedData = await Promise.all(featurePromise);
        //         return await featureDeletedData;
        //     }
        //   }

        //   // Delete Permissions 
        //   if(await result.permissions){
        //     if(result.permissions.length > 0){
        //         var permissionsPromise = result.permissions.map(async (fId,x)=>{                 
        //           await Permission.deleteMany({_id:pId}).exec();
        //         });
        //         var permissionDeletedData = await Promise.all(permissionsPromise);
        //         return await permissionDeletedData;
        //     }
        //   }
        // });

        await  Groups.findOneAndDelete({ _id: req.body._id }).lean().exec(async (err, result) => {
          // console.log('err',err,'result',result);
          var resultData = await result;
          if (resultData) {            
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Level Deleted Successfully', result);
          } else {              
              Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

          }
      });
  }
}

module.exports = {
    addGroup,
    editGroup,
    groupList,
    deleteGroup,
    getGroupById
};
