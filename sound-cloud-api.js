"use strict";
var SoundCloudApi = require("./lib/SoundCloudApi");
module.exports = function (clientId) {
    return new SoundCloudApi(clientId);
};


