/**
 * Filename: bookingsController.js
 * Author: Oliver Thurn
 * Description: controller for all bookings
 * Date: May 9th, 2020
 */

const bookings = require("../models/bookings_mod.js");

exports.create = (req, res) => {
    bookings.createNew((err, data) => {
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
    bookings.getAll((err, data) => {
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
    bookings.findById((err, data) => {
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
    bookings.updateById((err, data) => {
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
    bookings.remove((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}