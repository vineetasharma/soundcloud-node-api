"use strict";
var request = require('request');

/**
 * getJsonData return the data for the requested url
 * @param url
 * @param cb
 */
function getJsonData(url, cb) {
    request.get({url: url, json: true}, function (err, res, body) {
        if (err) {
            return cb(err, null);
        }
        if (res.statusCode == 200) {
            return cb(null, body);
        }
        return cb(new Error(JSON.stringify(body)), null);
    });
}
module.exports.getJsonData = getJsonData;