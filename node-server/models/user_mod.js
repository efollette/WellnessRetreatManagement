/**
 * Filename: user_mod.js
 * Author: Oliver Thurn
 * Description: Data model for Users
 * Date: May 9th, 2020
 */


const db = require("./db_coms.js");

const User = function(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.uname = user.uname;
    this.pword = user.pword;
    this.business_id = user.busines_id;

}

User.createNew = (newEvent, req) => {

}

User.getAll = result => {

}

User.findById = (eventId, res) => {

}

User.updateById = (eventId, event, res) => {

}

User.remove = (id, res) => {

}

User.removeAll = result => {

}

module.exports = User;