const mail = require('nodemailer');
const config = require('./config/email');

let transporter = mail.createTransport('smtps://' + config.email + ':' + config.key + '@' + config.smtp);

module.exports = (mensagem, cb) => {
    transporter.sendMail(mensagem, (error, info) => {

        if (error) {
            console.log(error);
            return cb(true, null);
        }

        return cb(false, info.response);

    });
};
