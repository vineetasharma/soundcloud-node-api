var Messages = require('./../helpers/messages');
var Users = require('./users');
var SoundCloudApi = function (client_id) {
    if (!client_id) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.client_id = client_id;
    SoundCloudApi.prototype.users= new Users(this.client_id);
};
module.exports = SoundCloudApi;