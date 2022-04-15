const multer = require('multer')
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');

const maxSize = 1 * 1024 * 1024;


const path = require('path');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "public/upload/service")
    },
    filename: function(req, file, cb) {
        console.log(file);
        var extname = path.extname(file.originalname).toLowerCase();
        var imageName = file.fieldname + "-" + Date.now() + extname
        req.body.image = imageName;
        cb(null, imageName)
    }
})


module.exports = upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
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
                title: 'image',
                msg: "Only .png, .jpg and .jpeg format allowed!",
                status: -6
            }


        }

    },
    onFileSizeLimit: function(file) {
        req.file = {
            error: true,
            title: 'image',
            msg: "Image file is to large",
            status: -6
        }
    }
});