const config = require('../config/env/config.js')();
const nodemailer = require('nodemailer');

const all_functions = {
    'sendemail': (email, subject, text, callback) => {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: config.nodemailer.user,
              pass: config.nodemailer.pass
            }
          });
          let mailOptions = {
            from: config.nodemailer.user,
            to: email,
            subject: subject,
            text: text
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              callback(error);
              //res.send(error)
            } else {
              callback(null,'Email sent: ' + info.response);
              //res.send(info.response);
            }
          });
    },
 
};

module.exports = all_functions;