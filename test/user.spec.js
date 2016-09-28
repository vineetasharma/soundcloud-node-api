/**
 * Created by ttnd on 28/9/16.
 */
var assert = require('assert'),
    Users = require('./../lib/users');

describe('Validating client_id: ', function () {
    it("should throw error with no client_id provided ", function () {
        assert.throws(
            function () {
                var user = new Users();
            },
            Error, 'client_key is not provided'
        );
    });
    it("should not throw error with client_id provided ", function () {
        assert.doesNotThrow(
            function () {
                var user = new Users('client_Id');
            },
            Error
        );
    });
});
describe('getAllUsers method::', function () {
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getAllUsers();
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when callback is provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getAllUsers(function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserDetails method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserDetails();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserDetails('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserDetails('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserTracks method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserTracks();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserTracks('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserTracks('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserPlaylists method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserPlaylists();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserPlaylists('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserPlaylists('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserFollowings method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowings();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowings('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserFollowings('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserFollowingUser method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowingUser();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no followingId is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowingUser('user_id');
            },
            Error, 'following_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowingUser('user_id', 'following_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id,following_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserFollowingUser('user_id', 'following_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserFollowers method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowers();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowers('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserFollowers('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserFollowerUser method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowerUser();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no followerId is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowerUser('user_id');
            },
            Error, 'follower_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFollowerUser('user_id', 'follower_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id,follower_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserFollowerUser('user_id', 'follower_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserFavoriteTrack method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFavoriteTrack();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no followerId is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFavoriteTrack('user_id');
            },
            Error, 'follower_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFavoriteTrack('user_id', 'follower_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id,follower_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserFavoriteTrack('user_id', 'follower_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserComments method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserComments();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserComments('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserComments('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserFavorites method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFavorites();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserFavorites('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserFavorites('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserGroups method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserGroups();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserGroups('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserGroups('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});
describe('getUserWebProfiles method::', function () {
    it("should throw error when no user_id is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserWebProfiles();
            },
            Error, 'user_id is not provided'
        );
    });
    it("should throw error when no callback is provided ", function () {
        var user = new Users('client_Id');
        assert.throws(
            function () {
                user.getUserWebProfiles('user_id');
            },
            Error, 'callback_url is not provided'
        );
    });
    it("should not throw error when user_id and callback are provided ", function () {
        var user = new Users('client_Id');
        assert.doesNotThrow(
            function () {
                user.getUserWebProfiles('user_id', function (data, err) {
                })
            },
            Error
        );
    });
});