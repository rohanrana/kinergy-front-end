const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Form = require("../models/formBuilderModel");
const Section = require("../models/sectionModel");
const Question = require("../models/questionModel");
const generalHelper = require("../helper/general");

var oldSections = null;
function setValue(result) {
  oldSections = result;
}
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
};

module.exports = formApis;
