const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Form = require("../models/formBuilderModel");
const Section = require("../models/sectionModel");
const Question = require("../models/questionModel");
const generalHelper = require("../helper/general");

const formService = require("../models/formServiceModel");
const formHelper = require("../helper/form.js");
const fileHelper = require("../helper/fileHelper");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;
const CustomerQuestionAnswers = require("../models/customerQuestionAnswersModel");
var ObjectID = require("mongodb").ObjectID;
var oldSections = null;
function setValue(result) {
  oldSections = result;
}

const deleteAllQuestionsAnswerByCustomer = (customerId,formId)=>{
  CustomerQuestionAnswers.find({customerId:customerId,formId:formId}).exec(async(AnswersErr,AnswerResult)=>{
    
    if(!AnswersErr){
      console.log("AnswerResult11",AnswerResult);
      AnswerResult && AnswerResult.length > 0 && AnswerResult.map(async (ans,ansX)=>{
        if(ans.file){
          await generalHelper.removeFile(null,null,ans.value);
          var response = await CustomerQuestionAnswers.findByIdAndDelete({_id:ans._id}).exec();
          console.log('response',response);          
        }else{
          CustomerQuestionAnswers.findByIdAndDelete({_id:ans._id}).exec();          
        }
      })
    }
  })
}
const getCustomerAnswer = async (questionId,formId=null,customerId=null)=>{
    var customerQues =  await CustomerQuestionAnswers.findOne({formId:formId,customerId:customerId,question:questionId}).lean().exec();
    if(customerQues) return customerQues.value;else return null;
}
const  checkForRemoveOldFile = async (customerId, formId, questionId)=>{
  // console.log('---------------------',customerId, formId, questionId);
  var Query = {customerId:customerId, formId:formId, question:questionId};
  // console.log('Query',Query)
  await CustomerQuestionAnswers.findOne(Query).lean().exec(async (err,result)=>{
      if(result){
        console.log('ResultValue',result.value)
        var value = result.value;
        if(await result.file) await generalHelper.removeFile(null,null,value);
      }else{
        console.log('findErr',err);
      }
  })
  
};

const addFormAnswer = async (customerId, formId, questionId, questionData) => {
  try {
    await CustomerQuestionAnswers.findOneAndUpdate(
      { customerId: customerId, formId: formId, question: questionId }, //your condition for check
      { $set: questionData }, //new values you want to set
      { upsert: true, new: true }
    ).exec(async (errRespoinse, successResponse) => {
      // console.log(
      //   "errRespoinse",
      //   errRespoinse,
      //   "successResponse",
      //   successResponse.value + " Inserted"
      // );
    });
  } catch (err) {
    return null;
  }
};
const getRecord = async (Model, where, select, populate = false) => {
  try {
    if (populate) {
      return await Model.find(where).populate(populate).select(select).exec();
    } else {
      return await Model.find(where).select(select).exec();
    }
  } catch (err) {
    return null;
  }
};
const getServiceCategory = async (formId) => {
  // console.log('serviceCategory',serviceCategory,'formId',formId);
  var serviceData = await getRecord(
    formService,
    { form: formId },
    { _id: 1, serviceCategory: 1 },
    { path: "serviceCategory", select: "_id title slug" }
  );
  var serviceCategoryIds = [];
  var servicePromise = [];
  if (serviceData && serviceData.length > 0) {
    servicePromise = serviceData.map(async (s, x) => {
      if (
        !generalHelper.checkValueExist(
          serviceCategoryIds,
          "slug",
          s.serviceCategory.slug
        )
      ) {
        serviceCategoryIds.push({ slug: s.serviceCategory.slug });
        return await {
          _id: s.serviceCategory._id,
          slug: s.serviceCategory.slug,
          title: s.serviceCategory.title,
          service: await getServices(formId, s.serviceCategory._id),
        };
      }
    });
  }
  return await Promise.all(servicePromise);
};

const getManageQuestion = async (question,formId=null,customerId=null) => {
  if (!question || question.length == 0) return await null;
  console.log('#QUESTION - ','formId',formId,'customerId',customerId);
  questionData =
  question &&
  question.map(async (q, x) => {

      returnObj = {
        _id: q._id,
        value: await getCustomerAnswer(q._id,formId,customerId),
        title: q.title,
        slug: q.slug,
        description: q.description,
      };
     
      returnObj.optionType = q.optionType;
      returnObj.required = q.required;
      if (q.optionType == "radio"){ returnObj.options = q.options;}
      else if (q.optionType == "dropdown") {returnObj.options = q.options;}
      else if (q.optionType == "file") {returnObj.file = q.file;}
      else if (q.optionType == "checkBox"){ returnObj.options = q.options;}

      returnObj.comment = q.comment;
      returnObj.sort = q.sort;

      return returnObj;
    });
  return await Promise.all(questionData);
};

const manageSection = async (section,formId=null,customerId=null) => {
  if (!section || section.length == 0) return await null;
  console.log('#SECTION - ','formId',formId,'customerId',customerId);
  sectionData =
    section &&
    section.map(async (s, x) => {
      return await {
        _id: s._id,
        title: s.title,
        slug: s.slug,
        description: s.description,
        question: await getManageQuestion(s.question,formId,customerId),
      };
    });
  return await Promise.all(sectionData);
};
const getServices = async (formId, serviceCategory) => {
  // console.log('serviceCategory',serviceCategory,'formId',formId);
  var serviceData = await getRecord(
    formService,
    { form: formId, serviceCategory: serviceCategory },
    { _id: 1, serviceCategory: 1, service: 1 },
    { path: "service", select: "_id title slug" }
  );
  var serviceIds = [];
  var servicePromise = serviceData.map(async (s, x) => {
    if (!generalHelper.checkValueExist(serviceIds, "slug", s.service.slug)) {
      serviceIds.push({ slug: s.service.slug });
      return await {
        _id: s.service._id,
        slug: s.service.slug,
        title: s.service.title,
        subService: await getSubServices(
          formId,
          serviceCategory,
          s.service._id
        ),
      };
    }
  });
  return await Promise.all(servicePromise);
};

const getSubServices = async (formId, serviceCategory, service) => {
  if (service) {
    // console.log('serviceCategory',serviceCategory,'formId',formId,'service',service);
    var subServiceData = await getRecord(
      formService,
      { form: formId, serviceCategory: serviceCategory, service: service },
      { _id: 1, subService: 1, title: 1, slug: 1 },
      { path: "subService", select: "_id title slug" }
    );
    console.log("subServiceData", subServiceData);
    var subServiceIds = [];
    var servicePromise = subServiceData.map(async (s, x) => {
      if (s.subService && s.subService._id && s.subService._id != "undefined") {
        if (
          !generalHelper.checkValueExist(
            subServiceIds,
            "slug",
            s.subService.slug
          )
        ) {
          subServiceIds.push({ slug: s.subService.slug });
          return await {
            _id: s.subService._id,
            slug: s.subService.slug,
            title: s.subService.title,
          };
        }
      }
    });
    return await Promise.all(servicePromise);
  }
};

const createTree = async (formId) => {
  var returnFinalData = [];
  var returnFinalObj = {};
  if (await formId) {
    var formData = await getRecord(
      Form,
      { _id: formId },
      { _id: 1, title: 1, slug: 1 }
    );
    returnFinalObj = await {
      ...returnFinalObj,
      formId: formData[0]._id,
      title: formData[0].title,
      slug: formData[0].slug,
      serviceCategory: await getServiceCategory(formId),
    };

    returnFinalData.push(returnFinalObj);
  }
  return await returnFinalData;
};

const addSectionInForm = function (formId, section) {
  try {
    Form.findByIdAndUpdate(
      { _id: formId },
      { $addToSet: { section: section._id } },
      { new: true, useFindAndModify: false }
    )
      .lean()
      .exec((err, QinForm) => {});
  } catch (err) {
    return null;
  }
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
  try {
    Section.findByIdAndUpdate(
      { _id: sectionId },
      { $addToSet: { question: question._id } },
      { new: true, useFindAndModify: false }
    )
      .lean()
      .exec((err, QinForm) => {});
  } catch (err) {
    return null;
  }
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
            sectionData = {
              title: section.title,
              slug: generalHelper.slugify(section.title),
              sort: section.sort,
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
                    question.title = question.title;
                    question.slug = generalHelper.slugify(question.title);
                    question.sort = question.sort;
                    question.optionType = question.optionType;
                    question.comment = question.comment;
                    question.required = question.required;

                    if (
                      question.optionType == "file" ||
                      question.optionType == "sign"
                    ) {
                      questionObj.options = [];
                      var fileObj = {
                        active: question.file.active,
                        maxFiles: question.file.maxFiles,
                        maxFileSize: question.file.maxFileSize,
                        fileType: question.file.fileType,
                      };
                      questionObj.file = fileObj;
                      questionDoc = new Question(questionObj);
                      questionDoc.save((err, questionResult) => {
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
                          var optionObj = {
                            label: option.label,
                            value: option.value,
                          };
                          optionArr.push(optionObj);
                        });
                        questionObj.options = optionArr;
                        questionObj.file = null;
                        questionObj.section = sectionResult._id;
                        questionObj.form = formResult._id;

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
                      questionObj.options = [];
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
      var slug = generalHelper.slugify(title);
      formData = { title: title, description: description, slug: slug };
      // formDoc = new Form(formData);
      // Save Form================================================================================
      // formDoc.save((err, formResult) => {
      Form.findOneAndUpdate({ _id: req.body._id }, formData, { new: true })
        .lean()
        .exec((err, formResult) => {
          if (!err && formResult) {
            // generalHelper.removeSection(req.body._id);

            if (data[0] && data[0].section && data[0].section.length > 0) {
              var sectionPromise = data[0].section.map(
                (section, sectionKey) => {
                  sectionData = {
                    title: section.title,
                    sort: section.sort,
                    slug: generalHelper.slugify(section.title),
                    description: section.description,
                    form: formResult._id,
                  };
                  // console.log("1111111111111111111111======".sectionData);
                  // sectionDoc = new Section(sectionData);

                  // Save section ====================================================
                  // sectionDoc.save((err, sectionResult) => {
                  //   console.log('req.body.section._id ',req.body.section._id );
                  Section.findOneAndUpdate(
                    {
                      _id:
                        section && section._id ? section._id : new ObjectID(),
                    },
                    // { _id: section._id },
                    { $set: sectionData },
                    {
                      new: true,
                      upsert: true,
                    }
                  )

                    .lean()
                    .exec((err, sectionResult) => {
                      console.log(
                        "errOfsection",
                        err,
                        "sectionResult",
                        sectionResult
                      );
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
                            questionObj.title = question.title;
                            questionObj.sort = question.sort;
                            questionObj.optionType = question.optionType;
                            questionObj.comment = question.comment;
                            questionObj.required = question.required;

                            if (
                              question.optionType == "file" ||
                              question.optionType == "sign"
                            ) {
                              console.log("Question TYPE FILE");
                              questionObj.options = [];
                              var fileObj = {
                                active: question.file.active,
                                maxFiles: question.file.maxFiles,
                                maxFileSize: question.file.maxFileSize,
                                fileType: question.file.fileType,
                              };
                              questionObj.file = fileObj;
                              // console.log(questionObj);
                              // questionDoc = new Question(questionObj);
                              // questionDoc.save((err, questionResult) => {
                              console.log("fileObj1", fileObj);
                              Question.findOneAndUpdate(
                                {
                                  _id:
                                    question && question._id
                                      ? question._id
                                      : new ObjectID(),
                                },
                                // { _id: section._id },
                                { $set: questionObj },
                                {
                                  new: true,
                                  upsert: true,
                                }
                              )

                                .lean()
                                .exec((err, questionResult) => {
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
                              questionObj.file = {};
                              if (question.options.length > 0) {
                                var optionArr = [];
                                question.options.map((option, optionKey) => {
                                  var optionObj = {
                                    label: option.label,
                                    value: option.value,
                                  };
                                  optionArr.push(optionObj);
                                });

                                questionObj.options = optionArr;
                                questionObj.file = null;
                                questionObj.section = sectionResult._id;
                                questionObj.form = formResult._id;
                                // questionDoc = new Question(questionObj);
                                // questionDoc.save((err, questionResult) => {
                                Question.findOneAndUpdate(
                                  {
                                    _id:
                                      question && question._id
                                        ? question._id
                                        : new ObjectID(),
                                  },
                                  // { _id: section._id },
                                  { $set: questionObj },
                                  {
                                    new: true,
                                    upsert: true,
                                  }
                                )

                                  .lean()
                                  .exec((err, questionResult) => {
                                    // console.log("quesion_Add_ERR1", err);
                                    addQuestionInSection(
                                      sectionResult._id,
                                      questionResult
                                    );
                                  });
                              }
                            } else {
                              questionObj = { ...questionObj, options: [] };
                              // questionDoc = new Question(questionObj);
                              // questionDoc.save((err, questionResult) => {
                              Question.findOneAndUpdate(
                                {
                                  _id:
                                    question && question._id
                                      ? question._id
                                      : new ObjectID(),
                                },
                                // { _id: section._id },
                                { $set: questionObj },
                                {
                                  new: true,
                                  upsert: true,
                                }
                              )

                                .lean()
                                .exec((err, questionResult) => {
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
            "Form Data  Not Found."
          );
        else
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Form Data Found Successfully.",
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
          options: { sort: { sort: 1 } },
          populate: {
            path: "question",
            options: { sort: { sort: 1 } },
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

  formByIdDetails: async (req, res) => {
    if (!req.body._id)
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    Form.findOne({ _id: req.body._id })
      .populate({
        path: "section",
        options: { sort: { sort: 1 } },
        populate: {
          path: "question",
          options: { sort: { sort: 1 } },
        },
      })

      .lean()
      .exec(async (err, result) => {
        // console.log(result.length);
        if (err)
          return await Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result || result.length == 0)
          return await Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Form Not Found."
          );
        else {
          finalFormResult = {
            _id: result._id,
            title: result.title,
            slug: result.slug,
            description: result.description,
            section: await manageSection(result.section),
          };
          console.log(finalFormResult);
          return await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Form Found Successfully.",
            finalFormResult
          );
        }
      });
  },

  customerFormByIdWithAnswerDetails: async (req, res) => {
    if (!req.body._id) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.ENTER_FORM_ID);
    if (!req.body.customerId) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,'Enter customer id');
    const {_id,customerId} = req.body;
    Form.findOne({ _id: req.body._id })
      .populate({
        path: "section",
        options: { sort: { sort: 1 } },
        populate: {
          path: "question",
          options: { sort: { sort: 1 } },
        },
      })

      .lean()
      .exec(async (err, result) => {
        // console.log(result.length);
        if (err)
          return await Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result || result.length == 0)
          return await Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Form Not Found."
          );
        else {
          finalFormResult = {
            _id: result._id,
            title: result.title,
            slug: result.slug,
            description: result.description,
            section: await manageSection(result.section,_id,customerId),
          };

          console.log('#FORM - ','formId',_id,'customerId',customerId);
          return await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Form Found Successfully.",
            finalFormResult
          );
        }
      });
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
            Section.deleteMany({ form: req.body._id }).lean().exec();
            Question.deleteMany({ form: req.body._id }).lean().exec();
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
  addServiceToForm: async (req, res, next) => {
    if (!req.body.formId) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else {
      const { formId, serviceCategory } = req.body;
      var formServicePayloadData = [];
      var formServicePayload = {};
      // formServicePayload ={...formServicePayload,form:formId};
      console.log("formServicePayload", formServicePayload);
      if (serviceCategory && serviceCategory.length > 0) {
        formService.deleteMany({ form: formId }).lean().exec();
        serviceCategory.map(async (sc, scx) => {
          formServicePayload = {};
          formServicePayload = {
            ...formServicePayload,
            form: formId,
            serviceCategory: sc._id,
          };
          if (sc.service && sc.service.length > 0) {
            sc.service.map(async (s, sx) => {
              formServicePayload = {};
              formServicePayload = {
                ...formServicePayload,
                form: formId,
                serviceCategory: sc._id,
                service: s._id,
              };
              if (s.subService && s.subService.length > 0) {
                s.subService.map(async (ss, sx) => {
                  formServicePayload = {};
                  formServicePayload = {
                    ...formServicePayload,
                    form: formId,
                    serviceCategory: sc._id,
                    service: s._id,
                    subService: ss._id,
                  };
                  console.log("Save WIth Sub Service", formServicePayload);
                  forServiceData = new formService(formServicePayload);
                  forServiceData.save();
                  // Save WIth Sub Service
                });
              } else {
                forServiceData = new formService(formServicePayload);
                forServiceData.save();
                console.log("Save WIth Service", formServicePayload);
                // Save WIth Category
              }
            });
          } else {
            forServiceData = new formService(formServicePayload);
            forServiceData.save();
            console.log("Save WIth Category", formServicePayload);
            // Save WIth Category
          }
        });

        return await Response.sendResponseWithoutData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.Form_SERVICE_ADD_SUCCESSFULLY
        );
      } else {
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          "Enter Serivces."
        );
      }
    }
  },

  getLinkServices: async (req, res) => {
    var checkFormId = await req.body._id;
    var checkFormExist = await formHelper.checkFormExist(req.body._id);
    console.log("checkFormExist", checkFormExist);
    if (!checkFormId) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_FORM_ID
      );
    } else if (checkFormExist && checkFormExist.length == 0) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Form not found."
      );
    } else {
      var resultNEW = await createTree(req.body._id);
      var resDataPromise = await Promise.all(resultNEW);
      console.log("resDataPromise", resDataPromise);
      return await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Form Services Found Successfully.",
        resDataPromise
      );
    }
  },
  formSubmit: async (req, res) => {
    // console.log("formData", req.body);
    // console.log

    const { customerId, formId, question, files } = JSON.parse(
      JSON.stringify(req.body)
    );

    if (!customerId)
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please enter customer id."
      );
    if (!formId)
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please enter form id."
      );
    if (!question)
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please enter question data."
      );
    try {
      
      deleteAllQuestionsAnswerByCustomer(customerId,formId);
      // CustomerQuestionAnswers.deleteOne({customerId: customerId,formId: formId}).exec();
      for (let key in question) {
        if (question.hasOwnProperty(key)) {
          //  console.log(key, question[key]);
          
          var questionData = {
            customerId: customerId,
            formId: formId,
            question: key,
            value: question[key].toString(),
          };
          // console.log("questionData", questionData);

          addFormAnswer(customerId, formId, key, questionData);
        }
      }
      // console.log("files", files);
      files &&
        files.length > 0 &&
        files.map(async (v, x) => {
         await  checkForRemoveOldFile(customerId, formId, v.fieldName);
          var questionData = {
            customerId: customerId,
            formId: formId,
            question: v.fieldName,
            value: v.location + "/" + v.fileName,
            file: 1,
            mimeType: v.mimetype,
            fileName: v.fileName,
          };
          // console.log('fileDATA',questionData);

          await addFormAnswer(customerId, formId, v.fieldName, questionData);
        });
    } catch (formEr) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Form not saved."
      );
    }

    return await Response.sendResponseWithoutData(
      res,
      resCode.EVERYTHING_IS_OK,
      "Form submit successfully."
    );
  },

  formFileUpload: async (req, res, next) => {
    // console.log('req.files',req.files);
    var fileLocation = await "public/uploads/form";
    var fileCount = await 10;
    try {
      !fs.existsSync(`./${fileLocation}`) &&
        fs.mkdirSync(`./${fileLocation}`, { recursive: true });
    } catch (e) {
      console.log("Already Exist.");
    }

    var filesData = [];
    var storage = await multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, fileLocation);
      },
      filename: async (req, file, cb) => {
        let fileObj = {};
        fileObj.fieldName = file.fieldname
          .replace("[", "")
          .replace("]", "")
          .replace("question", "")
          .replace("[]", "");
        // console.log("##Form", req.body, file);
        var extname = path.extname(file.originalname).toLowerCase();
        var fileName = fileObj.fieldName + Date.now() + extname;
        // console.log("fileName", fileName);
        //   req.body[file.fieldname] = fileName;
        //   req.body.mimetype = file.mimetype;
        //   req.body.location = fileLocation;
        fileObj.fileName = fileName;
        fileObj.mimetype = file.mimetype;
        fileObj.location = fileLocation;
        // try{
        //   req.body.question[fileObj.fieldName]  = fileLocation+"/"+ fileName;
        // }catch(er){
        //   console.log('er',er);
        // }

        filesData.push(fileObj);

        req.body.files = filesData;

        cb(null, fileName);
      },
    });

    var upload = await multer({
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: (req, file, cb) => {
        cb(null, true); 
        // var validationFileType = "";
        // try {
        //   console.log(req.body);
        //   var BODY = JSON.parse(JSON.stringify(req.body));
        //   validationObj = BODY.validation;
        //   var validaitonDATA = JSON.parse(
        //     validationObj[Object.keys(validationObj)[0]]
        //   );
        //   var validationArr = [];
        //   validationArr.push(validaitonDATA);
        //   console.log("______validation", validationArr[0].fileType);
        //   validationFileType = validationArr[0].fileType;
        //   console.log("----------------f-----------", req.body, file);
        //   // cb(null, true);
        //   fileMimeTypeArr = file.mimetype.split("/");
        //   var validationFileTypeArr = validationFileType.split(",");
        //   if (validationFileTypeArr.length > 0 && validationFileTypeArr[0] && validationFileTypeArr[0] != "" ) {
        //     if (validationFileTypeArr.includes(fileMimeTypeArr[1])) {
        //       cb(null, true);
        //       console.log('1212123');
        //     } else {
        //       cb(null, false);
        //       console.log(
        //         "-----------------------------",
        //         validationFileTypeArr
        //       );
        //       // return new cb(new Error("Only/ .png, .jpg and .jpeg format allowed!"));
        //       req.file = {
        //         error: true,
        //         title: file.fieldname,
        //         msg:
        //           "Only " +
        //           validationFileTypeArr.toString() +
        //           " format allowed!",
        //         status: -6,
        //       };
        //       console.log("==================", req.file);
              
        //     }
        //   }else{
        //     cb(null, true);
        //   }
        // } catch (validaitionErr) {
        //   console.log("validationError", validaitionErr);
        // }
      },
      onFileSizeLimit: async (file) => {
        req.file = {
          error: true,
          title: file.fieldname,
          msg: "Image file is to large",
          status: -6,
        };
      },
    }).any();
    // .fields([
    //   {
    //     name: 'question[]',
    //     maxCount: await fileCount,
    //   },
    // ]);

    upload(req, res, function (err) {
      // console.log("errBOdy", req.body);
      if (err instanceof multer.MulterError) {
        console.log("uploading_err", err);
        // A Multer error occurred when uploading.
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log("uploading_err", err);
      }
      next();
      //   // Everything went fine.
    });
  },
};

module.exports = formApis;
