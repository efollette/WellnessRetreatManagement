/**
 * Filename: rooms_mod.js
 * Author: Oliver Thurn
 * Description: Data model for Rooms
 * Date: May 9th, 2020
 */

const db = require("./db_coms.js");

const Room = function(room) {
    this.status = room.status;
    this.capacity = room.capacity;
    this.amenities = room.amenities;
    this.price = room.price;
}

Room.createNew = (newRoom, req) => {

}

Room.getAll = result => {

}

Room.findById = (roomId, res) => {

}

Room.updateById = (roomId, room, res) => {

}

Room.remove = (id, res) => {

}

Room.removeAll = result => {

}

module.exports = Room;