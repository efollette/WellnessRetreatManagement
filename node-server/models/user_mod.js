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

User.createNew = (newUser, req) => {
    db.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
}

User.getAll = result => {
    db.query("select * from users", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
        return;
    });
}

User.findById = (userId, res) => {
    db.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // No user with ID
        result({ kind: "not_found" }, null);
    });
}

User.updateById = (userId, user, res) => {
    db.query(
        "UPDATE users SET first_name = ?, last_name = ?, email = ?, uname = ?, pword = ?, business_id = ? WHERE id = ?", [user.first_name, user.last_name, user.email, user.uname, user.pword, user.busines_id, userId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No user with ID
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated user: ", { id: userId, ...user });
            result(null, { id: userId, ...user });
        }
    );
}

User.remove = (userId, res) => {
    db.query("DELETE FROM users WHERE id = ?", userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // No User with ID
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", userId);
        result(null, res);
    });
}

User.removeAll = result => {
    db.query("DELETE FROM users", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} user`);
        result(null, res);
    });
}

User.verifyUser = (userName, passWord, result) => {

    console.log("uName = " + userName + " pWord = " + passWord);

    db.query("SELECT * FROM users WHERE uname = ?", userName, (err, res2) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res2.length) {
            // probably want a loop or a better way to check if there are multiple user names
            if (res2[0].pword === passWord) {
                console.log("found user with matching password");
                console.log(res2)
                var userId = { 'userId': res2[0].id }
                result(null, res2)
                return;
            }
        } else {
            // No user with ID
            result({ kind: "not_found" }, null);
            return;
        }

    });
}

module.exports = User;