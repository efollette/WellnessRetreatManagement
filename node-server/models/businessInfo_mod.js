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

}

BusinessInfo.getAll = result => {

}

BusinessInfo.findById = (businessInfoId, res) => {

}

BusinessInfo.updateById = (businessInfoId, businessInfo, res) => {

}

BusinessInfo.remove = (id, res) => {

}

BusinessInfo.removeAll = result => {

}

module.exports = BusinessInfo;