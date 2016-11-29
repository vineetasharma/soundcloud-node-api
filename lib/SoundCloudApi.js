"use strict";
var Messages = require('./../helpers/messages'),
    User = require('./User'),
    Tracks = require('./Tracks'),
    PlayLists = require('./PlayLists');
function SoundCloudApi(clientId) {
    if (!clientId) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.clientId = clientId;
    this.user = new User(clientId);
    this.tracks = new Tracks(clientId);
    this.playLists = new PlayLists(clientId);
}
module.exports = SoundCloudApi;
