// const fileUpload = require('../middleware/fileUpload');
module.exports = upload(req, res, function(err) {
    console.log(req.body);
    if (err) {
        res.send(err)
    } else {
        req.body.slug = slugify(req.body.title, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true });
        let service = new Service(req.body);
        service.save((err, result) => {
            // console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Service Save Successfully.', result);
            else
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG + '123');
        });
    }
});
// module.exports = true;