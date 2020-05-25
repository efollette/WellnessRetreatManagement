/**
 * Filename: userController.js
 * Author: Oliver Thurn
 * Description: controller for all user
 * Date: May 9th, 2020
 */

const user = require("../models/user_mod.js");

exports.create = (req, res) => {
    res.send('NOT IMPLEMENTED: user create');
}

exports.getAll = (req, res) => {
    console.log("user getAll");
    user.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}

exports.getOne = (req, res) => {
    res.send('NOT IMPLEMENTED: user getOne');
}

exports.updateOne = (req, res) => {
    res.send('NOT IMPLEMENTED: user updateOne');
}

exports.deleteOne = (req, res) => {
    res.send('NOT IMPLEMENTED: user deleteOne');
}

exports.verify = (req, res) => {
    res.send("you hit the server");
}