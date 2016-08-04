var SoundCloudApi = require("./lib/sound_cloud_api");

module.exports = function (clientId) {
    return new SoundCloudApi(clientId);
};


