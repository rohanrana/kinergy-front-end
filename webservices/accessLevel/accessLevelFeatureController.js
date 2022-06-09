const Response = require("../../common_functions/response_handler");
const resCode = require("../../helper/httpResponseCode");
const resMessage = require("../../helper/httpResponseMessage");
const generalHelper = require("../../helper/general");

const Level = require("../../models/accessLevelModel");
const Groups = require("../../models/permissionGroupModel");
const Feature = require("../../models/featureModel");
const Permission = require("../../models/permissionGroupModel");



const featureToGroupPush = (groupId, featureId) => {
    Groups.findByIdAndUpdate(
      { _id: groupId },
      { $addToSet: { feature: featureId } },
      { new: true, useFindAndModify: false }
    )
      .lean()
      .exec();
  };
  

  const featureToGroupPop = async (groupId, featureId) => {
    Groups.findByIdAndUpdate(
      { _id: groupId },
      { $pull: { feature: featureId } },
    )
      .lean()
      .exec();
  };
  
const addFeature = async (req, res) => {
    const { name,sort,status,group} = req.body;
   
    const featureData = new Feature({
        name:name,
        featureSlug:generalHelper.slugify(name),
        sort:sort,
        status:status,
        group: group
    });
    await  featureData.save(async (err, result) => {
      if(await result){          
        var featureId = await result._id;
        featureToGroupPush(group, featureId);
        Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK, 'Feature Add Successfully', result);
      }else {        
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
       }
      
    });
  };

const editFeature = async (req,res)=>{
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Feature Id');
  } else {
    const { name,sort,status,group} = req.body;
   
    const featureData = {
        name:name,
        featureSlug:generalHelper.slugify(name),
        sort:sort,
        status:status,
        group: group,
        
    };
      
      Feature.findOneAndUpdate({ _id: req.body._id },featureData, { new: true }).lean().exec((err, result) => {
            if (!err) {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Feature Update Successfully.', result);
            } else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

        });

    
  }
}

const featureList = async(req,res)=> {
  await Feature.find({}).select({capabilities:0,permissions:0}).sort({sort:1})
  .exec((err, result) => {
    // console.log(err, result);
    if (err) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
    } else if (!result || result.length == 0) {
        Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Feature Not Found.");
    } else {
        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Feature Data.', result);     
    }
  });
}
//  Get Group Detail POST
const getFeatureById = async(req,res)=> {
  if (!req.body._id) {
    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Feature Id.');
} else {
        await Feature.find({}).select({capabilities:0,permissions:0}).sort({sort:1})
        .exec((err, result) => {
          // console.log(err, result);
          if (err) {
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
          } else if (!result || result.length == 0) {
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Feature Not Found.");
          } else {
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Feature Data.', result);     
          }
        });
     }
}



// Delete POST 


const deleteFeature  = async (req, res) => {
  if (!req.body._id) {
      Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Feature Id.');
  } else {
      await Feature.find({_id:req.body._id}).lean().exec(async (fErr,fResult)=>{
          console.log('fErr',fErr,'fResult',fResult);
          if(fResult && fResult.length > 0){
                await  Feature.findOneAndDelete({ _id: req.body._id }).lean().exec(async (err, result) => { 
                    console.log('err',err,'result',result);
                    var resultData = await result;
                    if (resultData) {            
                        featureToGroupPop(fResult[0].group,req.body._id);
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Feature Deleted Successfully', result);
                    } else {              
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
        
                    }
                });
            }else{
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Feature Not Found.');
            }
      });
        
  }
}

module.exports = {
    addFeature,
    editFeature,
    featureList,
    deleteFeature,
    getFeatureById
};
