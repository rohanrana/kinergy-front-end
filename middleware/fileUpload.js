const multer = require('multer')
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');

const maxSize = 1 * 1024 * 1024;


const path = require('path');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // console.log(file);
        // Uploads is the Upload_folder_name
        if (file.fieldname == 'logo') {
            cb(null, "public/uploads/service")
        } else if (file.fieldname == 'banner') {
            cb(null, "public/uploads/service")
        } else {
            cb(null, "public/uploads/")
        }
    },
    filename: function(req, file, cb) {
        // console.log(req.body, file);
        var extname = path.extname(file.originalname).toLowerCase();
        var imageName = file.fieldname + "-" + Date.now() + extname
        req.body[file.fieldname] = imageName;
        cb(null, imageName)
    }
})


module.exports = upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
        // console.log(req.body, file);
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            // return new cb(new Error("Only/ .png, .jpg and .jpeg format allowed!"));
            req.file = {
                error: true,
                title: file.fieldname,
                msg: "Only .png, .jpg and .jpeg format allowed!",
                status: -6
            }


        }

    },
    onFileSizeLimit: function(file) {
        req.file = {
            error: true,
            title: file.fieldname,
            msg: "Image file is to large",
            status: -6
        }
    }
});