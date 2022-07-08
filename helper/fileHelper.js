const File = require("../models/fileModel");
const fs = require("fs");
const fileAttach = (fileData) => {
  try {
    var fileData = new File({
      relId: fileData.relId,
      relType: fileData.relType,
      fileName: fileData.fileName,
      fileType: fileData.fileType,
      fileLocation: fileData.fileLocation,
      visableToCustomer: fileData.visableToCustomer
        ? fileData.visableToCustomer
        : false,
      addBy: fileData.addBy,
    });
    return fileData.save();
  } catch (err) {
    console.log("error while attaching");
  }
  return false;
};

const fileUnlink = (filePath) => {
  try {
    fs.unlink(filePath, function (err) {
      if (!err) {
        console.log('removed','path',filePath);
        return true;
      } else {
        console.log("removing_file_error", err);
      }
    });
  } catch (err) {
    console.log("error while unlink file.");
  }
  return false;
};
module.exports = {
  fileAttach,
  fileUnlink,
};
