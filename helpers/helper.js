"use strict";
var request = require('request');
var Messages = require('./messages');
function getJsonData(url, cb) {
    request.get(url, function (err, res, body) {
        if (err) {
            return cb(err, null);
        }
        if (res.statusCode == 200) {
            return cb(null, body);
        }
        return cb(new Error(Messages.ERROR.NOT_FOUND), body);
    });
}
module.exports.getJsonData = getJsonData;