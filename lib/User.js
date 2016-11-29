"use strict";
var Messages = require('./../helpers/messages');
var Constants = require('./../helpers/enums');
var Helper = require('./../helpers/helper');
/**
 *
 * @param clientId
 * @returns {User}
 * @constructor
 */
var User = function (clientId) {
    if (!clientId) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.clientId = clientId;
    return this;
};

/**
 * _noop is a function which does nothing
 */
var _noop = function () {
};
/**
 * getAllUser of SoundCloud
 * @param cb
 */
User.prototype.getAllUser = function (cb) {
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '?client_id=' + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserDetails on basis of userId
 * @param userId
 * @param cb
 */
User.prototype.getUserDetails = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserTracks of a particular User
 * @param userId
 * @param cb
 */
User.prototype.getUserTracks = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/tracks?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserPlaylists of a particular user
 * @param userId
 * @param cb
 */
User.prototype.getUserPlaylists = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/playLists?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowings of a particular user
 * @param userId
 * @param cb
 */
User.prototype.getUserFollowings = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/followings?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowingUser gives the details of particular following user
 * @param userId
 * @param followingId
 * @param cb
 */
User.prototype.getUserFollowingUser = function (userId, followingId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!followingId)
        throw new Error(Messages.ERROR.UNDEFINED_FOLLOWING_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/followings/" + followingId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowers gives list of followers of a particular user
 * @param userId
 * @param cb
 */
User.prototype.getUserFollowers = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/followers?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowerUser gives details of a particular Follower
 * @param userId
 * @param followerId
 * @param cb
 */
User.prototype.getUserFollowerUser = function (userId, followerId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!followerId)
        throw new Error(Messages.ERROR.UNDEFINED_FOLLOWER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/followers/" + followerId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserComments gives list of comments of a user
 * @param userId
 * @param cb
 */
User.prototype.getUserComments = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/comments?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFavorites gives list of favorite tracks
 * @param userId
 * @param cb
 */
User.prototype.getUserFavorites = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/favorites?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFavoriteTrack gives a particular favorite track
 * @param userId
 * @param trackId
 * @param cb
 */
User.prototype.getUserFavoriteTrack = function (userId, trackId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!trackId)
        throw new Error(Messages.ERROR.UNDEFINED_TRACK_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/favorites/" + trackId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserGroups gives list of groups
 * @param userId
 * @param cb
 */
User.prototype.getUserGroups = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/groups?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserWebProfiles gives web profiles of a user
 * @param userId
 * @param cb
 */
User.prototype.getUserWebProfiles = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        cb = _noop;
    var url = Constants.BASE_URL.USER + '/' + userId + "/web-profiles?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

module.exports = User;
