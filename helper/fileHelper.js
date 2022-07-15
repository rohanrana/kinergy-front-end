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

const getAttachment = (relId,relType)=>{
  return File.find({relId:relId,relType:relType})
  .select({_id:1,relId:1,relType:1,fileName:1,fileType:1,fileLocation:1,addBy:1})
  .lean().exec();
};

const getDeleteAttachment = (relId,relType)=>{
  return File.deleteMany({relId:relId,relType:relType})
  .lean().exec();
};

module.exports = {
  fileAttach,
  fileUnlink,getAttachment
};
