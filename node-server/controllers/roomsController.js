/**
 * Filename: roomsController.js
 * Author: Oliver Thurn
 * Description: controller for all rooms
 * Date: May 9th, 2020
 */

const room = require("../models/rooms_mod.js");

exports.create = (req, res) => {
    room.createNew((err, data) => {
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
    room.createNew((err, data) => {
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
    room.findById((err, data) => {
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
    room.updateById((err, data) => {
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
    room.remove((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "An error occured when waiting for database"
            });
        } else {
            res.send(data);
        }
    })
}