var Messages = require('./../helpers/messages'),
    Users = require('./users'),
    Tracks = require('./tracks'),
    SoundCloudApi = function (client_id) {
        if (!client_id) {
            throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
        }
        this.client_id = client_id;
        SoundCloudApi.prototype.users = new Users(this.client_id);
        SoundCloudApi.prototype.tracks = new Tracks(this.client_id);
    };
module.exports = SoundCloudApi;