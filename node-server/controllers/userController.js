/**
 * Filename: userController.js
 * Author: Oliver Thurn
 * Description: controller for all user
 * Date: May 9th, 2020
 */

const user = require("../models/user_mod.js");

exports.create = (req, res) => {
    console.log("user Create");
    user.createNew((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
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
    console.log("user getOne");
    user.findById((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}

exports.updateOne = (req, res) => {
    console.log("user updateOne");
    user.updateById((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}

exports.deleteOne = (req, res) => {
    console.log("user deleteOne");
    user.remove((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}

exports.verify = (req, res) => {
    console.log(res);
    var userName = req.body['username'];
    var passWord = req.body['password'];
    console.log(userName);
    console.log(passWord);

    user.verifyUser(userName, passWord, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            console.log("data from fucntion : " + data);
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(data));
        }
    });

}

exports.signUp = (req, res) => {
    console.log(res)
    var userName = req.body['username'];
    var passWord = req.body['password'];
    console.log(userName);
    console.log(passWord);

    user.signUpNewUser(userName, passWord, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            console.log("Data back from sign up : " + data);
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(data));
        }
    });

}