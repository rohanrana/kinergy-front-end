const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Form = require("../models/formBuilderModel");
const Section = require("../models/sectionModel");
const Question = require("../models/questionModel");
const generalHelper = require("../helper/general");

const formService = require("../models/formServiceModel");
const formHelper = require("../helper/form.js");

var oldSections = null;
function setValue(result) {
  oldSections = result;
}

const getRecord = async (Model, where, select, populate = false) => {
  if (populate) {
    return await Model.find(where).populate(populate).select(select).exec();
  } else {
    return await Model.find(where).select(select).exec();
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

const getManageQuestion = async (section) => {
  if (!section || section.length == 0) return await null;
  sectionData =
    section &&
    section.map(async (s, x) => {
      returnObj = {
        _id: s._id,
        title: s.title,
        slug: s.slug,
        description: s.description,
      };
      returnObj.optionType = s.optionType;
      returnObj.required = s.required;
      if (s.optionType == "radio") returnObj.options = s.options;
      else if (s.optionType == "dropdown") returnObj.options = s.options;
      else if (s.optionType == "file") returnObj.file = s.file;
      else if (s.optionType == "checkBox") returnObj.options = s.options;

      returnObj.comment = s.comment;
      returnObj.sort = s.sort;
      return returnObj;
    });
  return await Promise.all(sectionData);
};

const manageSection = async (section) => {
  if (!section || section.length == 0) return await null;
  sectionData =
    section &&
    section.map(async (s, x) => {
      return await {
        _id: s._id,
        title: s.title,
        slug: s.slug,
        description: s.description,
        question: await getManageQuestion(s.question),
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
  Form.findByIdAndUpdate(
    { _id: formId },
    { $addToSet: { section: section._id } },
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
                    questionObj =
                      question.title &&
                      question.title != null &&
                      question.title != "undefined"
                        ? { ...questionObj, title: question.title }
                        : { ...questionObj };
                    questionObj =
                      question.title &&
                      question.title != null &&
                      question.title != "undefined"
                        ? {
                            ...questionObj,
                            slug: generalHelper.slugify(question.title),
                          }
                        : { ...questionObj };
                    questionObj =
                      question.sort &&
                      question.sort != null &&
                      question.sort != "undefined"
                        ? { ...questionObj, sort: question.sort }
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
      var slug = generalHelper.slugify(title);
      formData = { title: title, description: description, slug: slug };
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
                    sort: section.sort,
                    slug: generalHelper.slugify(section.title),
                    description: section.description,
                    form: formResult._id,
                  };
                  sectionDoc = new Section(sectionData);

                  // Save section ====================================================
                  sectionDoc.save((err, sectionResult) => {
                  //   console.log('req.body.section._id ',req.body.section._id );
                  // Section.findOneAndUpdate(
                  //   { _id: req.body.section._id },
                  //   sectionData,
                  //   {
                  //     new: true,
                  //     upsert: true,
                  //   }
                  // ).exec((err, sectionResult) => {
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
                            question.sort &&
                            question.sort != null &&
                            question.sort != "undefined"
                              ? { ...questionObj, sort: question.sort }
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
                              fileObj = { ...fileObj, fileType: fileTypesExt };
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
};

module.exports = formApis;
