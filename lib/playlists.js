/**
 * Created by ttnd on 6/10/16.
 */
var Messages = require('./../helpers/messages');
var Constants = require('./../helpers/enums');
var Helper = require('./../helpers/helper');
var Playlists = function (client_id) {
    if (!client_id) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.client_id = client_id;
    return this;
};

/**
 * getAPlaylist from soundcloud on the basis of playlistId
 * @param playlistId
 * @param cb
 */
Playlists.prototype.getAPlaylist = function (playlistId, cb) {
    if (!playlistId)
        throw new Error(Messages.ERROR.UNDEFINED_PLAYLIST_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.PLAYLISTS   + playlistId + '?client_id=' + this.client_id;
    Helper.getJsonData(url, cb);
};

module.exports = Playlists;