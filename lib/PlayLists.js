"use strict";
var Messages = require('./../helpers/messages');
var Constants = require('./../helpers/enums');
var Helper = require('./../helpers/helper');
var PlayLists = function (clientId) {
    if (!clientId) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.clientId = clientId;
};


/**
 * _noop is a function which does nothing
 */
var _noop = function () {
};
/**
 * getAPlaylist from soundcloud on the basis of playListId
 * @param playListId
 * @param cb
 */
PlayLists.prototype.getAPlaylist = function (playListId, cb) {
    if (!playListId)
        throw new Error(Messages.ERROR.UNDEFINED_PLAYLIST_ID);
    if (!cb)
        cb = _noop;
    Helper.getJsonData(getPlayListUrlById(playListId), cb);
};
function getPlayListUrlById(playListId) {
    return Constants.BASE_URL.PLAY_LISTS + '/' + playListId + '?client_id=' + this.clientId;
}
module.exports = PlayLists;