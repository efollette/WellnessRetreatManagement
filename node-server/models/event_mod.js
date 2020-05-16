/**
 * Filename: event_mod.js
 * Author: Oliver Thurn
 * Description: Data model for events
 * Date: May 9th, 2020
 */

const db = require("./db_coms.js");

const Event = function(event) {

    this.start = event.start;
    this.end = event.end;
    this.price = event.price;
    this.capacity = event.capacity;
    this.guests = event.guests;
    this.description = event.description;
}

Event.createNew = (newEvent, req) => {

}

Event.getAll = result => {

}

Event.findById = (eventId, res) => {

}

Event.updateById = (eventId, event, res) => {

}

Event.remove = (eventId, res) => {

}

Event.removeAll = result => {

}

module.exports = Event;