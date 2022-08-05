const Language = require("../models/languageModel");
// const languageData = require("../languages.json");
// const add = async () => {
//   //   console.log('languageData',languageData)
//   for (let key in languageData) {
//     if (languageData.hasOwnProperty(key)) {
//       // console.log(key);
//       var languageObj = await Language.findOneAndUpdate(
//         {
//           name: languageData[key].name,
//           native: languageData[key].native,
//           code: key,
//         },
//         {
//           name: languageData[key].name,
//           native: languageData[key].native,
//           code: key,
//         },
//         { new: true, upsert: true }
//       ).lean().exec(async (err, result) => {
//         if (!err) {
//           console.log(result.code);
//         } else {
//           console.log("err", err);
//         }
//       });
//     }
//   }
// };

const checkMultiLanguage = async (languages) => {
  if (!(await languages) && languages != "") return await null;
  if (!(await Array.isArray(languages)))
    languages = languages.toString().split(",");
  console.log("rowArr", languages);
  var languagePromise =
    languages &&
    languages.length > 0 &&
    languages.map(async (s, x) => {
      let language = await Language.findOne({ code: s }).lean().exec();
      console.log("language", language);
      if (language) return await language._id;
    });
  return await Promise.all(languagePromise);
};
module.exports = { checkMultiLanguage };
