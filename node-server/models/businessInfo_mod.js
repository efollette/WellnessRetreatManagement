/**
 * Filename: businessInfo_mod.js
 * Author: Oliver Thurn
 * Description: Data model for Business info
 * Date: May 9th, 2020
 */

const db = require("./db_coms.js");

const BusinessInfo = function(businessInfo) {
    this.name = businessInfo.name;
    this.addy = businessInfo.addy;
    this.capacity = businessInfo.capacity;
}

BusinessInfo.createNew = (newBusinessInfo, req) => {
    db.query("INSERT INTO businessInfo SET ?", newBusinessInfo, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created booking: ", { id: res.insertId, ...newBusinessInfo });
        result(null, { id: res.insertId, ...newBusinessInfo });
    });
}

BusinessInfo.getAll = result => {
    db.query("select * from businessInfo", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("businessInfo: ", res);
        result(null, res);
    });
}

BusinessInfo.findById = (businessInfoId, res) => {
    sql.query(`SELECT * FROM businessInfo WHERE id = ${businessInfoId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found businessInfo: ", res[0]);
            result(null, res[0]);
            return;
        }

        // No Business with ID
        result({ kind: "not_found" }, null);
    });
}

BusinessInfo.updateById = (businessInfoId, businessInfo, res) => {
    db.query(
        "UPDATE businessInfo SET name = ?, addy = ?, capacity = ? WHERE id = ?", [businessInfo.name, businessInfo.addy, businessInfo.capacity, businessInfoId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No business with ID
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated businnes: ", { id: businessInfoId, ...businessInfo });
            result(null, { id: businessInfoId, ...businessInfo });
        }
    );
}

BusinessInfo.remove = (businessId, res) => {
    db.query("DELETE FROM businessInfo WHERE id = ?", businessId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // No business with ID
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted business with id: ", businessId);
        result(null, res);
    });
}

BusinessInfo.removeAll = result => {
    db.query("DELETE FROM businessInfo", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} business`);
        result(null, res);
    });
}

module.exports = BusinessInfo;