#soundcloud-node-api

soundcloud-node-api : soundcloud-node-api is a node js utility module which supports most of the developer available for sound cloud. It is designed get data from  Sound Cloud API in a very simplest way.
The SoundCloud API exposes resources(rest api) to manage user data, sounds and play-lists. To access public resources(API), you just have to pass a **sound_cloud_clientId** as parameter. 
You can get the **sound_cloud_clientId** by registering the App over [developer](https://developers.soundcloud.com/) page. 

##How to install
```bash
    npm install soundcloud-node-api --save
```
##How to initialize module 
*example*
```javascript
    var soundCloud = require('soundcloud-node-api')(sound_cloud_clientId);
```
###User APIs:
By using user's APIs, you can access all the resources of User.
####Get All Users of SoundCloud
```javascript
soundCloud.user.getAllUsers(function (err, result) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});
```
#####Get a user details by userId
```javascript
soundCloud.user.getUserDetails(userId,function (err, userDetails) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("userDetails: ", JSON.parse(userDetails));
  }
});
```
#####Get tracks of a User
```javascript
soundCloud.user.getUserTracks(userId,function (err, tracks) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Tracks: ", JSON.parse(tracks));
  }
});
```
#####Get playLists of a User
```javascript
soundCloud.user.getUserPlaylists(userId,function (err, playLists) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("PlayLists: ", JSON.parse(playLists));
  }
});
```
#####Get Followings of a User
```javascript
soundCloud.user.getUserFollowings(userId,function (err, followings) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Followings: ", JSON.parse(followings));
  }
});
```
#####Get detail of a follower who follows another User, By user id and follower user id
```javascript
soundCloud.user.getUserFollowingUser(userId,followingId,function (err, followingUser) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("FollowingUser: ", JSON.parse(followingUser));
  }
});
```
#####Get list of users follows another User
```javascript
soundCloud.user.getUserFollowers(userId,function (err, followers) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Followers: ", JSON.parse(followers));
  }
});
```
#####Get a Follower's details of a User
```javascript
soundCloud.user.getUserFollowerUser(userId,followerId,function (err, follower) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Follower: ", JSON.parse(follower));
  }
});
```
#####Get Comments of a User
```javascript
soundCloud.user.getUserComments(userId,function (err, comments) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Comments: ", JSON.parse(comments));
  }
});
```
#####Get favorite tracks of a User
```javascript
soundCloud.user.getUserFavorites(userId,trackId,function (err, tracks) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("FavoriteTracks: ", JSON.parse(tracks));
  }
});
```
#####Get a FavoriteTrack of a User
```javascript
soundCloud.user.getUserFavoriteTrack(userId,trackId,function (err, track) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("FavoriteTrack: ", JSON.parse(track));
  }
});
```
#####Get Groups of a User
```javascript
soundCloud.user.getUserGroups(userId,function (err, groups) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Groups: ", JSON.parse(groups));
  }
});
```
#####Get WebProfiles of a User
```javascript
soundCloud.user.getUserWebProfiles(userId,function (err, profiles) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Profiles: ", JSON.parse(profiles));
  }
});
```
###PlayList APIs:
By using Sets/PlayLists APIs, you can access all the resources of PlayList.
#####Get a PlayList using playListId
```javascript
soundCloud.playLists.getAPlaylist(playListId,function (err, playList) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("PlayList: ", JSON.parse(playList));
  }
});
```
###Tracks APIs:
By using Tracks APIs, you can access all the resources of tracks.
#####Get a track details using trackId
```javascript
soundCloud.tracks.getATrack(trackId,function (err, track) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Track details: ", JSON.parse(track));
  }
});
```
#####Get a track's comments using trackId
```javascript
soundCloud.tracks.getCommentsForTrack(trackId,function (err, comments) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Track comments: ", JSON.parse(comments));
  }
});
```
#####Get a comment of a track using trackId & commentId
```javascript
soundCloud.tracks.getACommentForTrack(trackId,commentId,function (err, comment) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Comment: ", JSON.parse(comment));
  }
});
```
#####Get the list of users who marked a track as favorite
```javascript
soundCloud.tracks.getFavoritersOfTrack(trackId,function (err, users) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Users: ", JSON.parse(users));
  }
});
```
##How to test
To run tests type: `npm test`
To run tests with coverage type: `npm run coverage`
##Issues/Bugs :heart::
[Sound Cloud Node API Issue Tracker](https://github.com/vineetasharma/soundcloud-node-api/issues)
