/**
 * Filename: guestController.js
 * Author: Oliver Thurn
 * Description: controller for all guest
 * Date: May 9th, 2020
 */

const guest = require("../models/guest_mod.js");

exports.create = (req, res) => {
    guest.createNew((err, data) => {
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
    console.log("guest exports get all");
    guest.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving guests."
            });
        } else {
            console.log(data)
            res.send(JSON.stringify(data));
        }
    });
}

exports.getOne = (req, res) => {
    guest.findById((err, data) => {
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
    guest.updateById((err, data) => {
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
    guest.remove((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}