const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const generalHelper = require("../helper/general");

const Level = require("../models/accessLevelModel");
const Groups = require("../models/permissionGroupModel");
const Feature = require("../models/featureModel");
const Permission = require("../models/permissionModel");
var ObjectId = require("mongoose").Types.ObjectId;
const log = console.log;
const LevelPermission = require("../models/levelPermissionsModel");
const permissionHelper = require('../helper/permissions');

// function groupBy3(result,parent,parentSlug,child,childSlug,subChild = false){
//   var treeData = [],
//   levelData = {};
//   result.forEach(function(obj){
//       if(obj[parentSlug] in levelData){    
//         if(!checkValueExist(treeData[levelData[obj[parentSlug]]][child],childSlug,obj[childSlug]))     {       
//           if(subChild){
//             if(parentSlug == 'levelSlug'){
//               treeData[levelData[obj[parentSlug]]][child].push({_id:obj[child],[childSlug]:obj[childSlug],[subChild]:groupBy3(result,'feature','featureSlug','permissions','permissionSlug')});  
              
//               }else if(parentSlug == 'featureSlug'){
//                 treeData[levelData[obj[parentSlug]]][child].push({_id:obj[child],[childSlug]:obj[childSlug],capabilities:{view:obj.view},[subChild]:groupBy3(result,'feature','featureSlug','permissions','permissionSlug')});  
//               }else{
//               treeData[levelData[obj[parentSlug]]][child].push({_id:obj[child],[childSlug]:obj[childSlug],capabilities:{view:obj.view,edit:obj.edit},[subChild]:groupBy3(result,'feature','featureSlug','permission','permissionSlug')});  
//             }
              
            
//           }else{
//               treeData[levelData[obj[parentSlug]]][child].push({_id:obj[child],[childSlug]:obj[childSlug],capabilities:{view:obj.view,edit:obj.edit}});  
//           }      
//         }          
//       }else {
//         if(subChild){
//           if(parentSlug == 'levelSlug'){
//             levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug],[subChild]:groupBy3(result,'feature','featureSlug','permissions','permissionSlug')}  ]}) - 1;
            
//           }else if(parentSlug == 'featureSlug'){
//             levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug],capabilities:{view:obj.view},[subChild]:groupBy3(result,'feature','featureSlug','permissions','permissionSlug')}  ]}) - 1;
//           }else{
//             levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug],capabilities:{view:obj.view,edit:obj.edit},[subChild]:groupBy3(result,'feature','featureSlug','permission','permissionSlug')}  ]}) - 1;
//           }
          
//         }else{
//           levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug],capabilities:{view:obj.view,edit:obj.edit}}  ]}) - 1;
//         }
          
//       }
//   });
//   return treeData;
// }


const addPreferenceLevel = async (preferenceLevel = [])=>{  
  var promise =   preferenceLevel.map(async (PLId)=>{
    return  LevelPermission.find({level:PLId}).exec()
   })
   returnArr  = await Promise.all(promise);   
   return await  returnArr;
};


const assignPreferencesToLevel = async (LevelId,LevelSlug,permissions)=>{
    if(permissions){
      if(permissions.length >0 ){
        var promiseMap = permissions.map(async(perData,perDatax)=>{
          if(perData){
            if(perData.length > 0){
              return perData.map(async (p,x)=>{
                // Permission Payload
              
                   ///////////////////////////////////////////////////////////////////// 
                    let permissionObj = {};
                    permissionObj = {...permissionObj,level:LevelId,levelSlug: LevelSlug,groupSlug: p.groupSlug,
                      featureSlug: p.featureSlug,                      
                      permissionSlug: p.permissionSlug,
                      view: p.view,
                      edit: p.edit,
                    };
                     
                    // ///////////////////////////////////////////////////////////
                    let levelPermissionData = await new LevelPermission(permissionObj);                    
                    // Save Permissions
                    await levelPermissionData.save((permissionErr, permissionResult) => {
                      console.log("permissionErr",permissionErr,"permissionResult",permissionResult);
                    });
              })
            }
          }
        })
        var assignData = await Promise.all(promiseMap);

      }
    }
    return await assignData;
}
const deleteLevel  = async (req, res) => {
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Level Id');
  } else {
        await  Level.findOneAndDelete({ _id: req.body._id }).lean().exec(async (err, result) => {
          var resultData = await result;
          if (resultData) {
            LevelPermission.deleteMany({ level: req.body._id }).lean().exec();
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Level Deleted Successfully', result);
          } else {              
              Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

          }
      });
  }
}

const add = async (req, res) => {
  const { level, sort ,preferenceLevel} = req.body;
 
  const accessLevel = new Level({
    level: level,
    sort: sort,
    slug: generalHelper.slugify(level),
  });
  
  var allPreferences =   await addPreferenceLevel(preferenceLevel);
    ///All Preferences From Selected Level 
   var addPreferencesData = await assignPreferencesToLevel(accessLevel._id,accessLevel.slug,allPreferences);
   console.log('addPreferencesData',addPreferencesData);
     
  await  accessLevel.save(async (err, result) => {
    if(await result){
      Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK, resMessage.ACCESS_LEVEL_ADD_SUCCESSFULLY, result);
    }else {        
      Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
     }
    
  });
};


const edit = async (req, res) => {
  if (!req.body._id) {
         Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Level Id');
    } else {
      const { level, sort} = req.body;
    
      const accessLevelData = {
        level: level,
        sort: sort,
        slug: generalHelper.slugify(level), 
      };    
      Level.findOneAndUpdate({ _id: req.body._id }, accessLevelData, { new: true }).lean().exec((err, result) => {
          if (!err) {
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Level Update Successfully.', result);
          } else {
              Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
          }
      });
    }
 
};

const getLevelPermission = (req, res) => {
  const featureOption = { sort: [["feature.sort", "desc"]] };
  Groups.find({}, { _id: 1, groupSlug: 1, feature: 1 })
    .populate({
      path: "feature",
      select: "_id featureSlug",
      featureOption,
      populate: {
        path: "permissions",
        select: "_id permissionSlug capabilities",
      },
    })

    .exec((err, result) => {
      console.log(err, result);
      if (err) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
      } else if (!result || result.length == 0) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Permission Not Found.");
      } else {
        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Data .', result);     
      }
    });
};

async function  getLevelById(req,res, next){
  if (!req.body._id) {
    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Level Id');
} else {
  await Level.find({_id:req.body._id})  
    .exec((err, result) => {
      console.log(err, result);
      if (err) {
          Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
      } else if (!result || result.length == 0) {
          Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Level Not Found.");
      } else {
          Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Level Data.', result);     
      }
    });
}
}
 const  getLevelList = async (req, res)=> {  
   await Level.find({}, { _id: 1,level: 1,slug:1 })  
    .exec((err, result) => {
      console.log(err, result);
      if (err) {
          Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
      } else if (!result || result.length == 0) {
          Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Level Not Found.");
      } else {
          Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Level Data.', result);     
      }
    });
};


// Get Level Data
// function checkValueExist(data,key,value){
//   // log('data',data);
//   return  isFound = data.some(element => {
//     if (element[key] == value) {
//       return true;
//     }      
//     return false;
//   });
// }




const getLevelPermissionByLevelId = (req, res) => { 
  if(!req.body._id){
    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Level Id.');
  }else{
    LevelPermission.find({level:req.body._id, group: { $ne: null } })  
    .exec((err, result) => {
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (!result || result.length == 0) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          "Permission Not Found."
        );
      } else {
        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Data .', groupBy3(result,'group','levelSlug','group','groupSlug','feature'));     
      }
    });
  }
  
};

const getLevelPermissionByLevelIdNew = async (req, res) => { 
  if(!req.body._id){
    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Level Id.');
  }else{
    const permissionsData  = await permissionHelper.getLevelPermission(req.body._id);
    return  Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Permission Data .',permissionsData );       
  }
  
};


const permissionsToLevel = (req, res, next) => {
  const { group, levelSlug, level } = req.body;
  if(group.length > 0){
  // LevelPermission.deleteMany({ level: level }).lean().exec();
  // console.log('group',group);
  group.map((g, gIndex) => {
    let levelObj = {};
    levelObj = { ...levelObj, level: level, levelSlug: levelSlug };
    // console.log('g.feature',g.feature);    
    if (g.feature && g.feature.length > 0) {
      // console.log('g.feature',g.feature); 
      g.feature.map((f, fIndex) => {
        let featureObj = {};
        featureObj = {...featureObj,level: level,levelSlug: levelSlug,group: g._id,groupSlug: g.groupSlug,feature: f._id,featureSlug: f.featureSlug};
        // console.log('featureObj',featureObj);
        if (f.permissions && f.permissions.length > 0) {
          f.permissions.map((p, pIndex) => {
            let permissionObj = {};
            permissionObj = {...permissionObj,level: level,levelSlug: levelSlug,group: g._id,groupSlug: g.groupSlug,feature: f._id,
              featureSlug: f.featureSlug,
              permissions: p._id,
              permissionSlug: p.permissionSlug,
              view: p.capabilities.view,
              edit: p.capabilities.edit,
            };
            console.log('permissionObj',permissionObj);

            let levelPermissionData = new LevelPermission(permissionObj);
            LevelPermission.deleteMany({ level: level ,group: g._id,feature: f._id,permissions: p._id}).lean().exec();
            levelPermissionData.save((permissionErr, permissionResult) => {
              console.log("permissionErr",permissionErr,"permissionResult",permissionResult);
            });
          });
        } else {
          featureObj = { ...featureObj, view: f.capabilities.view };
          let levelPermissionData = new LevelPermission(featureObj);
          LevelPermission.deleteMany({ level: level ,group: g._id}).lean().exec();
          levelPermissionData.save((featureErr, featureResult) => {
            // console.log("featureErr",featureErr,"featureResult",featureResult);
          });
        }
      });
    } else {
      let levelPermissionData = new LevelPermission(levelObj);
      LevelPermission.deleteMany({ level: level }).lean().exec();
      levelPermissionData.save((groupErr, groupResult) => {
        // console.log("groupErr", groupErr, "groupResult", groupResult);
      });
    }
  });
  Response.sendResponseWithoutData(res,resCode.EVERYTHING_IS_OK,resMessage.LEVEL_PERMISSION_ADD_SUCCESSFULLY);
};
}

const permissionsToLevelNew = (req, res, next) => {
  const { group, levelSlug, level } = req.body;
  if(group.length > 0){
  LevelPermission.deleteMany({ level: level }).lean().exec();
  // console.log('group',group);
  group.map((g, gIndex) => {
    let levelObj = {};
    levelObj = { ...levelObj, level: level, levelSlug: levelSlug };
    // console.log('g.feature',g.feature);    
    if (g.feature && g.feature.length > 0) {
      // console.log('g.feature',g.feature); 
      g.feature.map((f, fIndex) => {
        let featureObj = {};
        featureObj = {...featureObj,level: level,levelSlug: levelSlug,group: g._id,groupSlug: g.groupSlug,feature: f._id,featureSlug: f.featureSlug};
        // console.log('featureObj',featureObj);
        if (f.permissions && f.permissions.length > 0) {
          f.permissions.map((p, pIndex) => {
            let permissionObj = {};
            permissionObj = {...permissionObj,level: level,levelSlug: levelSlug,group: g._id,groupSlug: g.groupSlug,feature: f._id,
              featureSlug: f.featureSlug,
              permissions: p._id,
              permissionSlug: p.permissionSlug,
              view: p.capabilities.view?p.capabilities.view:0,
              edit: p.capabilities.edit?p.capabilities.edit:0,
              delete: p.capabilities.delete?p.capabilities.delete:0,
            };
            console.log('permissionObj',permissionObj);

            let levelPermissionData = new LevelPermission(permissionObj);
            // LevelPermission.deleteMany({ level: level ,group: g._id,feature: f._id,permissions: p._id}).lean().exec();
            levelPermissionData.save((permissionErr, permissionResult) => {
              console.log("permissionErr",permissionErr,"permissionResult",permissionResult);
            });
          });
        } else {
          // featureObj = { ...featureObj, view: f.capabilities.view?f.capabilities.view:0 ,edit: f.capabilities.edit?f.capabilities.edit:0 };
          let levelPermissionData = new LevelPermission(featureObj);
          // LevelPermission.deleteMany({ level: level ,group: g._id}).lean().exec();
          levelPermissionData.save((featureErr, featureResult) => {
            // console.log("featureErr",featureErr,"featureResult",featureResult);
          });
        }
      });
    } else {
      let levelPermissionData = new LevelPermission(levelObj);
      // LevelPermission.deleteMany({ level: level }).lean().exec();
      levelPermissionData.save((groupErr, groupResult) => {
        // console.log("groupErr", groupErr, "groupResult", groupResult);
      });
    }
  });
  Response.sendResponseWithoutData(res,resCode.EVERYTHING_IS_OK,resMessage.LEVEL_PERMISSION_ADD_SUCCESSFULLY);
};
}
function getGroupBy(search){    
    return Groups.find({name:{ $regex: `${search}`, $options: "i" }}).select({_id:1,name:1,groupSlug: 1  }).limit(5).exec();
}
function getFeatureBy(search){  
  return Feature.find({name:{ $regex: `${search}`, $options: "i" }}).select({_id:1,name:1,featureSlug:1}).limit(5).exec();
}
function getPermissionBy(search){  
  return Permission.find({name:{ $regex: `${search}`, $options: "i" }}).select({_id:1,name:1,permissionSlug:1}).limit(5).exec();
}
const searchPreference = async (req,res)=>{    
    const {search} = req.body;
    
   var Groups = await getGroupBy(search);
   var Features = await getFeatureBy(search);
   var Permissions = await getPermissionBy(search);
   var finalArray = await [...Groups,...Features,...Permissions]; 
  return await Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Search Data.',finalArray);
} 
module.exports = {
  add,
  edit,
  getLevelPermission,
  permissionsToLevel,
  permissionsToLevelNew,
  getLevelPermissionByLevelId,
  getLevelPermissionByLevelIdNew,
  getLevelList,
  deleteLevel,
  getLevelById,
  searchPreference

};
