"use strict";
var Messages = require('./../helpers/messages');
var Constants = require('./../helpers/enums');
var Helper = require('./../helpers/helper');
var Tracks = function (clientId) {
    if (!clientId) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.clientId = clientId;
    return this;
};


/**
 * noop is a function which does nothing
 */
var _noop = function () {
};

/**
 * getATrack from soundcloud on the basis of trackId
 * @param trackId
 * @param cb
 */
Tracks.prototype.getATrack = function (trackId, cb) {
    if (!trackId)
        throw new Error(Messages.ERROR.UNDEFINED_TRACK_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.TRACKS + '/' + trackId + '?client_id=' + this.clientId;
    Helper.getJsonData(url, cb);
};

Tracks.prototype.getCommentsForTrack = function (trackId, cb) {
    if (!trackId)
        throw new Error(Messages.ERROR.UNDEFINED_TRACK_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.TRACKS + '/' + trackId + '/comments?client_id=' + this.clientId;
    Helper.getJsonData(url, cb);
};
Tracks.prototype.getACommentForTrack = function (trackId, commentId, cb) {
    if (!trackId)
        throw new Error(Messages.ERROR.UNDEFINED_TRACK_ID);
    if (!commentId)
        throw new Error(Messages.ERROR.UNDEFINED_COMMENT_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.TRACKS + '/' + trackId + '/comments/' + commentId + '?client_id=' + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getFavoritersOfTrack gives list of users who favorited the track
 * @param trackId
 * @param cb
 */
Tracks.prototype.getFavoritersOfTrack = function (trackId, cb) {
    if (!trackId)
        throw new Error(Messages.ERROR.UNDEFINED_TRACK_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.TRACKS + '/' + trackId + '/favoriters?client_id=' + this.clientId;
    Helper.getJsonData(url, cb);
};

module.exports = Tracks;