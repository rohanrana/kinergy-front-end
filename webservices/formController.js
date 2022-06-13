const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Form = require("../models/formBuilderModel");
const Section = require("../models/sectionModel");
const Question = require("../models/questionModel");
const generalHelper = require("../helper/general");

const formService = require("../models/formServiceModel");

var oldSections = null;
function setValue(result) {
  oldSections = result;
}
const getRecord = async (Model,where,select,populate = false)=>{
  if(populate){
    return await Model.find(where).populate(populate).select(select).exec();
  } else{
    return await Model.find(where).select(select).exec();
  }
  
}
const getServiceCategory = async (formId)=>{
  // console.log('serviceCategory',serviceCategory,'formId',formId);
  var serviceData = await getRecord(formService,{form:formId},{_id:1,serviceCategory:1},{path:"serviceCategory",select:"_id title slug"});
    var serviceCategoryIds = [];
    if(serviceData && serviceData.length > 0){
      var servicePromise = serviceData.map(async (s,x)=>{
        if(!generalHelper.checkValueExist(serviceCategoryIds,'slug',s.serviceCategory.slug)){
          serviceCategoryIds.push({slug:s.serviceCategory.slug});
            return await {_id:s.serviceCategory._id,slug:s.serviceCategory.slug,title:s.serviceCategory.title,service:await getServices(formId,s.serviceCategory._id)};
        }
        
      })
    }
  return await Promise.all(servicePromise);
  
}
const getServices = async (formId,serviceCategory)=>{
  // console.log('serviceCategory',serviceCategory,'formId',formId);
  var serviceData = await getRecord(formService,{form:formId,serviceCategory:serviceCategory},{_id:1,serviceCategory:1,service:1},{path:"service",select:"_id title slug"});
    var serviceIds = [];
  var servicePromise = serviceData.map(async (s,x)=>{
    if(!generalHelper.checkValueExist(serviceIds,'slug',s.service.slug)){
      serviceIds.push({slug:s.service.slug});
         return await {_id:s.service._id,slug:s.service.slug,title:s.service.title,subService:await getSubServices(formId,serviceCategory,s.service._id)};
    }
    
  })
  return await Promise.all(servicePromise);
  
}

const getSubServices = async (formId,serviceCategory,service)=>{
  if(service){
  // console.log('serviceCategory',serviceCategory,'formId',formId,'service',service);
  var subServiceData = await getRecord(formService,{form:formId,serviceCategory:serviceCategory,service:service},{_id:1,subService:1,title:1,slug:1},{path:"subService",select:"_id title slug"});
  console.log('subServiceData',subServiceData);
  var subServiceIds = [];
  var servicePromise = subServiceData.map(async (s,x)=>{    
      if(s.subService && s.subService._id && s.subService._id != 'undefined'){
        if(!generalHelper.checkValueExist(subServiceIds,'slug',s.subService.slug)){
          subServiceIds.push({slug:s.subService.slug});
          return await {_id:s.subService._id,slug:s.subService.slug,title:s.subService.title};
        }
    }
    
  })
  return await Promise.all(servicePromise);
}
}

const  createTree = async (formId)=>{
  var returnFinalData= [];
  var returnFinalObj = {};
  if(await formId){
      var formData = await getRecord(Form,{_id:formId},{_id:1,title:1,slug:1});
      returnFinalObj = await {...returnFinalObj,formId:formData[0]._id,title:formData[0].title,slug:formData[0].slug,serviceCategory:await getServiceCategory(formId)};
      // var serviceCategoryData = await getRecord(formService,{form:formId},{_id:1,serviceCategory:1},{path:"serviceCategory",select:"_id title slug"});
      // console.log('serviceCategoryData',serviceCategoryData);
      // serviceCategoryObj = [];
      // serviceCategoryArray = [];
      // returnFinalObj = {...returnFinalObj,serviceCategory:[]};
      // var serviceCategoryPromise = serviceCategoryData.map(async(sc,scx)=>{
      //   if(! await generalHelper.checkValueExist(serviceCategoryArray,'slug',sc.serviceCategory.slug)){
      //     await serviceCategoryObj.push({serviceCategory:1});
      //     await serviceCategoryArray.push({_id:sc.serviceCategory._id,slug:sc.serviceCategory.slug,title:sc.serviceCategory.title,service:await getServices(formId,sc.serviceCategory._id)}) 
      //     returnFinalObj = await {...returnFinalObj,serviceCategory:serviceCategoryArray};
      //   }
      // })
      // await Promise.all(serviceCategoryPromise);
      returnFinalData.push(returnFinalObj);
    }
  return await returnFinalData;
}
// function MakeEasyData(result){
  
//   var returnArray = [];
//   if(result && result.length > 0){
//     result.map((f,x)=>{
//       var dataObj = {};
//       dataObj = {...dataObj,_id:f._id};
//         if(f.form && f.form._id){
//           dataObj = {...dataObj,form:f.form._id,formSlug:f.form.slug,formTitle:f.form.title};
//         }
//         if(f.serviceCategory && f.serviceCategory._id){
//           dataObj = {...dataObj,serviceCategory:f.serviceCategory._id,serviceCategorySlug:f.serviceCategory.slug,serviceCategoryTitle:f.serviceCategory.title};
//         }
//         if(f.service && f.service._id){
//           dataObj = {...dataObj,service:f.service._id,serviceSlug:f.service.slug,serviceTitle:f.service.title};
//         }
//         if(f.subService && f.subService._id){
//           dataObj = {...dataObj,subService:f.subService._id,subServiceSlug:f.subService.slug,subServiceTitle:f.subService.title};
//         }
//         returnArray.push(dataObj);
//     })
//   }
//   return returnArray;
// }

// function groupBy3(result){
//   console.log('result',result);
//   var treeData = [],
//   levelData = {};
//   result.forEach(function(obj){
//       if(obj.form.slug in levelData){   
//         console.log('treeData',treeData) ;
//         console.log('levelData',levelData);
//         // if(!generalHelper.checkValueExist(treeData[levelData[obj]].serviceCategory,'serviceCategory',obj.serviceCategory))     {       
//           console.log('11111111',treeData[0]);
//           treeData[levelData[obj.serviceCategory.slug]].push({_id: obj.form._id,slug: obj.form.slug,title: obj.form.title});  
              
//         // }          
//       }else {
//          levelData[obj.form.slug] = treeData.push({_id: obj.form._id,slug: obj.form.slug,title: obj.form.title, [obj.form.slug]: [{_id:obj.serviceCategory._id,slug:obj.serviceCategory.slug,name:obj.serviceCategory.title}  ]}) - 1;
          
//       }
//   });
//   console.log('levelData',levelData);
//   return treeData;
// }

// function groupBy3(result,parent,parentSlug,child,childSlug,subChild = false){
//   var treeData = [],
//   levelData = {};
//   result.forEach(function(obj){
//       if(obj[parentSlug] in levelData){    
//         if(!generalHelper.checkValueExist(treeData[levelData[obj[parentSlug]]][child],childSlug,obj[childSlug]))     {       
//           // console.log('______subChildexe',subChild);
//           if(subChild){
//           //   if(parentSlug == 'formSlug'){
//             let pushObj = {};
//             if(obj[child])
//               pushObj = {...pushObj,_id:obj[child]};            
//             if(obj[childSlug])
//                pushObj = {...pushObj,[childSlug]:obj[childSlug]};
//             if(subChild)
//                pushObj = {...pushObj,[subChild]:groupBy3(result,'service','serviceSlug','subService','subServiceSlug')};                         
//               treeData[levelData[obj[parentSlug]]][child].push(pushObj);                           
//           //   }
//           //   else if(parentSlug == 'serviceCategorySlug'){
//           //     treeData[levelData[obj[parentSlug]]][child].push({_id:obj[child],[childSlug]:obj[childSlug]});                           
//           //   }
              
//           }else{
//             let pushObj = {};
//             if(obj[child])
//               pushObj = {...pushObj,_id:obj[child]};            
//             if(obj[childSlug])
//                pushObj = {...pushObj,[childSlug]:obj[childSlug]};
//               treeData[levelData[obj[parentSlug]]][child].push(pushObj); 
              
//           }      
//         }          
//       }else {
//         // console.log('______subChildnew',subChild);
//         if(subChild){
//           if(subChild == 'service'){
//             let pushObj = {};
//             if(obj[parent])
//               pushObj = {...pushObj,_id:obj[parent]};     
//               if(obj[parentSlug])
//               pushObj = {...pushObj,[parentSlug]: obj[parentSlug]};    
//               if(obj[child]){
//                 let childObj = {};
//                 if(obj[child])
//                 childObj = {...childObj,_id:obj[child]};
//                 if(obj[childSlug])
//                 childObj = {...childObj,[childSlug]:obj[childSlug]};
//                 if(obj[subChild])
//                 childObj = {...childObj,[subChild]:groupBy3(result,'service','serviceSlug','subService','subServiceSlug')};
                
//                   pushObj = {...pushObj,[child]: [childObj]};    
//               }           
//              levelData[obj[parentSlug]] = treeData.push(pushObj) - 1;
//           }
//         //     // levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug],[subChild]:groupBy3(result,'serviceCategory','serviceCategorySlug','service','serviceSlug')}  ]}) - 1;
//         //     if(parentSlug == 'formSlug'){
//         //       levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug],[subChild]:groupBy3(result,'serviceCategory','serviceCategorySlug','service','serviceSlug','subService')}  ]}) - 1;
//         //     }
//         //     else if(parentSlug == 'serviceCategorySlug'){
//         //       levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug]}  ]}) - 1;                          
//         //     }
//         }else{
//           let pushObj = {};
//             if(obj[parent])
//               pushObj = {...pushObj,_id:obj[parent]};     
//               if(obj[parentSlug])
//               pushObj = {...pushObj,[parentSlug]: obj[parentSlug]};    
//               if(obj[child]){
//                 let childObj = {};
//                 if(obj[child])
//                 childObj = {...childObj,_id:obj[child]};
//                 if(obj[childSlug])
//                 childObj = {...childObj,[childSlug]:obj[childSlug]};
              
//                   pushObj = {...pushObj,[child]: [childObj]};    
//               }           

//              levelData[obj[parentSlug]] = treeData.push(pushObj) - 1;
//           // levelData[obj[parentSlug]] = treeData.push({_id: obj[parent],[parentSlug]: obj[parentSlug], [child]: [{_id:obj[child],[childSlug]:obj[childSlug]}  ]}) - 1;
//         }
          
//       }
//   });
//   return treeData;
// }

const addSectionInForm = function (formId, section) {
  Form.findByIdAndUpdate(
    { _id: formId },
    { $push: { section: section._id } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};

const addQuestionInForm = function (formId, question) {
  Form.findByIdAndUpdate(
    { _id: formId },
    { $push: { question: question._id } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};

const addQuestionInSection = function (sectionId, question) {
  Section.findByIdAndUpdate(
    { _id: sectionId },
    { $push: { question: question._id } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};

const formApis = {
  create: (req, res) => {
    const { title, description, data } = req.body;
    const slug = generalHelper.slugify(title);
    formData = { title, description, slug };
    formDoc = new Form(formData);
    // Save Form================================================================================
    formDoc.save((err, formResult) => {
      if (!err) {
        // Add Section
        if (data[0] && data[0].section && data[0].section.length > 0) {
          data[0].section.map((section, sectionKey) => {
            // Section Payload==========================
            // console.log(sectionData);
            sectionData = {
              title: section.title,
              description: section.description,
              form: formResult._id,
            };
            sectionDoc = new Section(sectionData);

            // Save section ====================================================
            sectionDoc.save((err, sectionResult) => {
              if (!err) {
                addSectionInForm(formResult._id, sectionResult);
                // Add Questions===================================================
                if (
                  section &&
                  section.question &&
                  section.question.length > 0
                ) {
                  // Question And Options -=================================
                  var questionObj = {};

                  section.question.map((question, questionKey) => {
                    questionObj =
                      question.title &&
                      question.title != null &&
                      question.title != "undefined"
                        ? { ...questionObj, title: question.title }
                        : { ...questionObj };
                    questionObj =
                      question.optionType &&
                      question.optionType != null &&
                      question.optionType != "undefined"
                        ? { ...questionObj, optionType: question.optionType }
                        : { ...questionObj };
                    questionObj =
                      question.comment &&
                      question.comment != null &&
                      question.comment != "undefined"
                        ? { ...questionObj, comment: question.comment }
                        : { ...questionObj };
                    questionObj =
                      question.required &&
                      question.required != null &&
                      question.required != "undefined"
                        ? { ...questionObj, required: question.required }
                        : { ...questionObj };

                    if (
                      question.optionType == "file" ||
                      question.optionType == "sign"
                    ) {
                      var fileObj = {};
                      questionObj = { ...questionObj, options: [] };
                      fileObj = {
                        ...fileObj,
                        active: question.file.fileType.active,
                      };
                      fileObj = {
                        ...fileObj,
                        maxFiles: question.file.fileType.maxFiles,
                      };
                      fileObj = {
                        ...fileObj,
                        maxFileSize: question.file.fileType.maxFileSize,
                      };

                      let fileTypesExt = {};
                      if (
                        question.file.fileType.type &&
                        question.file.fileType.type != "undefined"
                      ) {
                        var TypesArr = question.file.fileType.type;
                        console.log("TypesArr", TypesArr);
                        fileTypesExt = TypesArr;
                        fileObj = {
                          ...fileObj,
                          fileType: fileTypesExt,
                        };
                      }
                      questionObj = { ...questionObj, file: fileObj };
                      // console.log(questionObj);
                      questionDoc = new Question(questionObj);
                      questionDoc.save((err, questionResult) => {
                        console.log("quesion_Add_ERR2", err);
                        console.log("questionResult", questionResult);
                        addQuestionInSection(sectionResult._id, questionResult);
                      });
                    } else if (
                      question.optionType == "checkBox" ||
                      question.optionType == "radio" ||
                      question.optionType == "dropdown"
                    ) {
                      questionObj = { ...questionObj, file: {} };
                      if (question.options.length > 0) {
                        var optionArr = [];
                        question.options.map((option, optionKey) => {
                          var optionObj = {};
                          optionObj = { ...optionObj, label: option.label };
                          optionObj = { ...optionObj, value: option.value };
                          optionArr.push(optionObj);
                        });
                        questionObj = { ...questionObj, options: optionArr };
                        questionObj = { ...questionObj, file: null };
                        questionObj = {
                          ...questionObj,
                          section: sectionResult._id,
                        };
                        questionObj = { ...questionObj, form: formResult._id };
                        questionDoc = new Question(questionObj);
                        questionDoc.save((err, questionResult) => {
                          console.log("quesion_Add_ERR1", err);
                          addQuestionInSection(
                            sectionResult._id,
                            questionResult
                          );
                        });
                      }
                    } else {
                      questionObj = { ...questionObj, options: [] };
                      questionDoc = new Question(questionObj);
                      questionDoc.save((err, questionResult) => {
                        console.log("quesion_Add_ERR2", err);
                        console.log("questionResult", questionResult);
                        addQuestionInSection(sectionResult._id, questionResult);
                      });
                    }
                  });
                }
              }
            });
          });
        }
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.FORM_SAVED,
          formResult
        );
      } else {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
  },

  edit: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else {
      const { title, description, data } = req.body;
      const slug = generalHelper.slugify(title);
      formData = { title, description, slug };
      // formDoc = new Form(formData);
      // Save Form================================================================================
      // formDoc.save((err, formResult) => {
      Form.findOneAndUpdate({ _id: req.body._id }, formData, { new: true })
        .lean()
        .exec((err, formResult) => {
          if (!err && formResult) {
            generalHelper.removeSection(req.body._id);

            if (data[0] && data[0].section && data[0].section.length > 0) {
              var sectionPromise = data[0].section.map(
                (section, sectionKey) => {
                  console.log("sectionKey", sectionKey);
                  // Section Payload==========================
                  // console.log(sectionData);
                  sectionData = {
                    title: section.title,
                    description: section.description,
                    form: formResult._id,
                  };
                  sectionDoc = new Section(sectionData);

                  // Save section ====================================================
                  sectionDoc.save((err, sectionResult) => {
                    if (!err) {
                      addSectionInForm(formResult._id, sectionResult);

                      // Add Questions===================================================
                      if (
                        section &&
                        section.question &&
                        section.question.length > 0
                      ) {
                        // Question And Options -=================================
                        var questionObj = {};

                        section.question.map((question, questionKey) => {
                          questionObj =
                            question.title &&
                            question.title != null &&
                            question.title != "undefined"
                              ? { ...questionObj, title: question.title }
                              : { ...questionObj };
                          questionObj =
                            question.optionType &&
                            question.optionType != null &&
                            question.optionType != "undefined"
                              ? {
                                  ...questionObj,
                                  optionType: question.optionType,
                                }
                              : { ...questionObj };
                          questionObj =
                            question.comment &&
                            question.comment != null &&
                            question.comment != "undefined"
                              ? { ...questionObj, comment: question.comment }
                              : { ...questionObj };
                          questionObj =
                            question.required &&
                            question.required != null &&
                            question.required != "undefined"
                              ? { ...questionObj, required: question.required }
                              : { ...questionObj };

                          if (
                            question.optionType == "file" ||
                            question.optionType == "sign"
                          ) {
                            var fileObj = {};
                            questionObj = { ...questionObj, options: [] };
                            fileObj = {
                              ...fileObj,
                              active: question.file.fileType.active,
                            };
                            fileObj = {
                              ...fileObj,
                              maxFiles: question.file.fileType.maxFiles,
                            };
                            fileObj = {
                              ...fileObj,
                              maxFileSize: question.file.fileType.maxFileSize,
                            };

                            let fileTypesExt = {};
                            if (
                              question.file.fileType.type &&
                              question.file.fileType.type != "undefined"
                            ) {
                              var TypesArr = question.file.fileType.type;
                              console.log("TypesArr", TypesArr);
                              fileTypesExt = TypesArr;
                              fileObj = {
                                ...fileObj,
                                fileType: fileTypesExt,
                              };
                            }
                            questionObj = { ...questionObj, file: fileObj };
                            // console.log(questionObj);
                            questionDoc = new Question(questionObj);
                            questionDoc.save((err, questionResult) => {
                              addQuestionInSection(
                                sectionResult._id,
                                questionResult
                              );
                            });
                          } else if (
                            question.optionType == "checkBox" ||
                            question.optionType == "radio" ||
                            question.optionType == "dropdown"
                          ) {
                            questionObj = { ...questionObj, file: {} };
                            if (question.options.length > 0) {
                              var optionArr = [];
                              question.options.map((option, optionKey) => {
                                var optionObj = {};
                                optionObj = {
                                  ...optionObj,
                                  label: option.label,
                                };
                                optionObj = {
                                  ...optionObj,
                                  value: option.value,
                                };
                                optionArr.push(optionObj);
                              });
                              questionObj = {
                                ...questionObj,
                                options: optionArr,
                              };
                              questionObj = { ...questionObj, file: null };
                              questionObj = {
                                ...questionObj,
                                section: sectionResult._id,
                              };
                              questionObj = {
                                ...questionObj,
                                form: formResult._id,
                              };
                              questionDoc = new Question(questionObj);
                              questionDoc.save((err, questionResult) => {
                                // console.log("quesion_Add_ERR1", err);
                                addQuestionInSection(
                                  sectionResult._id,
                                  questionResult
                                );
                              });
                            }
                          } else {
                            questionObj = { ...questionObj, options: [] };
                            questionDoc = new Question(questionObj);
                            questionDoc.save((err, questionResult) => {
                              addQuestionInSection(
                                sectionResult._id,
                                questionResult
                              );
                            });
                          }
                        });
                      }
                    }
                  });
                }
              );
            }
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.FORM_UPDATE,
              formResult
            );
          } else {
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          }
        });
    }
  },

  list: (req, res) => {
    Form.find({})
      // .populate({
      //   path: "section",
      //   populate: {
      //     path: "question",
      //   },
      // })

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
            "Form Not Found."
          );
        else
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Form Found Successfully.",
            result
          );
      });
  },

  formById: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else {
      Form.find({ _id: req.body._id })
        .populate({
          path: "section",
          populate: {
            path: "question",
          },
        })

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
              "Form Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Form Found Successfully.",
              result
            );
        });
    }
  },
  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else {
      Form.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Section.deleteMany({form:req.body._id}).lean().exec()
            Question.deleteMany({form:req.body._id}).lean().exec()
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.FORM + resMessage.DELETE,
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
  status: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Form Id"
      );
    } else if (!req.body.status) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Form Status"
      );
    } else {
      Form.findOneAndUpdate(
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
              "Form Status Changed Successfully.",
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
  addServiceToForm: async (req,res,next)=>{
    if (!req.body.formId) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else {
        const {formId,serviceCategory} = req.body;
        var formServicePayloadData  = [];
        var formServicePayload ={};
        // formServicePayload ={...formServicePayload,form:formId};
        console.log('formServicePayload',formServicePayload);
        if(serviceCategory && serviceCategory.length > 0){
          formService.deleteMany({ form: formId }).lean().exec();
          serviceCategory.map(async (sc,scx)=>{
            formServicePayload = {}
            formServicePayload ={...formServicePayload,form:formId,serviceCategory:sc._id};               
              if(sc.service && sc.service.length > 0){
                sc.service.map(async (s,sx)=>{
                  formServicePayload = {}
                  formServicePayload ={...formServicePayload,form:formId,serviceCategory:sc._id,service:s._id};                             
                    if(s.subService && s.subService.length > 0){
                      s.subService.map(async (ss,sx)=>{
                        formServicePayload = {}
                        formServicePayload ={...formServicePayload,form:formId,serviceCategory:sc._id,service:s._id,subService:ss._id};                    
                        console.log('Save WIth Sub Service',formServicePayload);
                        forServiceData = new formService(formServicePayload);
                        forServiceData.save()
                        // Save WIth Sub Service
                      });   
                    }else{
                      forServiceData = new formService(formServicePayload);
                      forServiceData.save()
                      console.log('Save WIth Service',formServicePayload);
                      // Save WIth Category
                    }
                });   
              }else{
                    forServiceData = new formService(formServicePayload);
                    forServiceData.save()
                    console.log('Save WIth Category',formServicePayload);
                    // Save WIth Category
              }
          });     
          
          return await Response.sendResponseWithoutData(res,resCode.EVERYTHING_IS_OK,resMessage.Form_SERVICE_ADD_SUCCESSFULLY);
        }else{
          return Response.sendResponseWithoutData(res,resCode.WENT_WRONG,'Enter Serivces.');
        }
      }
  },

  getLinkServices:async(req,res)=>{
    var checkFormId = await req.body._id;
    if(!checkFormId){
      return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.ENTER_FORM_ID);
    }else{
      var resultNEW =  await createTree(req.body._id);
      var resDataPromise = await Promise.all(resultNEW);
      console.log('resDataPromise',resDataPromise);
       return await Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Form Services Found Successfully.",resDataPromise);
    }
    
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else {
      var resultNEW =  await createTree(req.body._id);
        var resDataPromise = await Promise.all(resultNEW);
        console.log('resDataPromise',resDataPromise);
         return await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Form Services Found Successfully.",
            resDataPromise 
          );
      // formService.find({form:req.body._id})
      // // .populate({path:"form",select:"_id title slug"})
      // // .populate({path:"serviceCategory",select:"_id title slug"})
      // // .populate({path:"service",select:"_id title slug"})
      // // .populate({path:"subService",select:"_id title slug"})
      // .lean().exec((err, result) => {
      //   // console.log(result.length);
      //   if (err)
      //     Response.sendResponseWithoutData(
      //       res,
      //       resCode.WENT_WRONG,
      //       resMessage.WENT_WRONG
      //     );
      //   else if (!result || result.length == 0)
      //     Response.sendResponseWithoutData(
      //       res,
      //       resCode.WENT_WRONG,
      //       "Form Services Not Found."
      //     );
      //   else{
      //     //console.log('result',result);
      //   var resultNEW = await createTree(req.body._id);
      //    return await Response.sendResponseWithData(
      //       res,
      //       resCode.EVERYTHING_IS_OK,
      //       "Form Services Found Successfully.",
      //       resultNEW
      //       // groupBy3(resultNEW,'form','formSlug','serviceCategory','serviceCategorySlug','service')

      //       // groupBy3(resultNEW,'form','formSlug','serviceCategory','serviceCategorySlug')
      //       // groupBy3(result,'serviceCategory','serviceCategorySlug','permissions','permissionSlug')
      //     );
      // }
      // });
    }
  }
};

module.exports = formApis;
