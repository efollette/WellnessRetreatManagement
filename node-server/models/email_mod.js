const db = require("./db_coms.js");
const mailer = require('nodemailer');

const Email = function() {
    this.sender = "";
    this.senderPassword = "";
    this.recipients = [];
    this.subject = "";
    this.content = "";
}

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'othurn1@gmail.com',
        pass: 'hDa-Jud-CF6-2kv'
    }
});

var mailOptions = {
    from: 'othurn1@gmail.com',
    to: 'othurn@ucsd.edu',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

Email.sendEmail = (recipients, content) => {
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = Email;