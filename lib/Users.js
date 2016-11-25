"use strict";
var Messages = require('./../helpers/messages');
var Constants = require('./../helpers/enums');
var Helper = require('./../helpers/helper');
var Users = function (clientId) {
    if (!clientId) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_KEY);
    }
    this.clientId = clientId;
    return this;
};

/**
 * getAllUsers of SoundCloud
 * @param cb
 */
Users.prototype.getAllUsers = function (cb) {
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '?client_id=' + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserDetails on basis of userId
 * @param userId
 * @param cb
 */
Users.prototype.getUserDetails = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserTracks of a particular User
 * @param userId
 * @param cb
 */
Users.prototype.getUserTracks = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/tracks?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserPlaylists of a particular user
 * @param userId
 * @param cb
 */
Users.prototype.getUserPlaylists = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/playLists?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowings of a particular user
 * @param userId
 * @param cb
 */
Users.prototype.getUserFollowings = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/followings?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowingUser gives the details of particular following user
 * @param userId
 * @param followingId
 * @param cb
 */
Users.prototype.getUserFollowingUser = function (userId, followingId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!followingId)
        throw new Error(Messages.ERROR.UNDEFINED_FOLLOWING_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/followings/" + followingId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowers gives list of followers of a particular user
 * @param userId
 * @param cb
 */
Users.prototype.getUserFollowers = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/followers?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFollowerUser gives details of a particular Follower
 * @param userId
 * @param followerId
 * @param cb
 */
Users.prototype.getUserFollowerUser = function (userId, followerId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!followerId)
        throw new Error(Messages.ERROR.UNDEFINED_FOLLOWER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/followers/" + followerId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserComments gives list of comments of a user
 * @param userId
 * @param cb
 */
Users.prototype.getUserComments = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/comments?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFavorites gives list of favorite tracks
 * @param userId
 * @param cb
 */
Users.prototype.getUserFavorites = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/favorites?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserFavoriteTrack gives a particular favorite track
 * @param userId
 * @param trackId
 * @param cb
 */
Users.prototype.getUserFavoriteTrack = function (userId, trackId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!trackId)
        throw new Error(Messages.ERROR.UNDEFINED_TRACK_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/favorites/" + trackId + "?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserGroups gives list of groups
 * @param userId
 * @param cb
 */
Users.prototype.getUserGroups = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/groups?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

/**
 * getUserWebProfiles gives web profiles of a user
 * @param userId
 * @param cb
 */
Users.prototype.getUserWebProfiles = function (userId, cb) {
    if (!userId)
        throw new Error(Messages.ERROR.UNDEFINED_USER_ID);
    if (!cb)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    var url = Constants.BASE_URL.USERS + '/' + userId + "/web-profiles?client_id=" + this.clientId;
    Helper.getJsonData(url, cb);
};

module.exports = Users;
