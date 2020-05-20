/**
 * Filename: guestController.js
 * Author: Oliver Thurn
 * Description: controller for all guest
 * Date: May 9th, 2020
 */

const guest = require("../models/guest_mod.js");

exports.create = (req, res) => {

}

exports.getAll = (req, res) => {
    console.log("guest exports get all");
    guest.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving guests."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getOne = (req, res) => {

}

exports.updateOne = (req, res) => {

}

exports.deleteOne = (req, res) => {

}