"use strict";
var Messages = require('./../helpers/messages'),
    Users = require('./Users'),
    Tracks = require('./Tracks'),
    PlayLists = require('./PlayLists');
function SoundCloudApi(clientId) {
    if (!clientId) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.clientId = clientId;
    this.users = new Users(clientId);
    this.tracks = new Tracks(clientId);
    this.playLists = new PlayLists(clientId);
};
console.log('Soundcloud object:::::::::::::::::::',new SoundCloudApi('clientId1'));
console.log('Soundcloud object:::::::::::::::::::',new SoundCloudApi('clientId2'));
module.exports = SoundCloudApi;
