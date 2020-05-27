const email = require("../models/email_mod.js");

exports.sendSingleEmail = (req, res) => {
    console.log("sending single email");
    console.log(req);

    email.sendEmail("first", "second");
}