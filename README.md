# SoundCloud_Node_API

SoundCloud_Node_API is designed to get data from  SoundCloud API in a very simplest way.

##  How to install
`npm install SoundCloud_Node_API --save`

## How to use

*example*

```javascript
var soundCloud = require('SoundCloud_Node_API')(sound_cloud_clientId);
```

#####Get All Users of SoundCloud
```javascript
soundCloud.getAllUsers(function (err, result) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});
```

#####Get a particular user details on the basis of userId
```javascript
soundCloud.getUserDetails(userId,function (err, userDetails) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("userDetails: ", JSON.parse(userDetails));
  }
});
```

#####get tracks of a particular User
```javascript
soundCloud.getUserTracks(userId,function (err, tracks) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Tracks: ", JSON.parse(tracks));
  }
});
```

#####get playLists of a particular User
```javascript
soundCloud.getUserPlaylists(userId,function (err, playLists) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("PlayLists: ", JSON.parse(playLists));
  }
});
```

#####get Followings of a particular User
```javascript
soundCloud.getUserFollowings(userId,function (err, followings) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Followings: ", JSON.parse(followings));
  }
});
```

#####get details of a following user of a particular User
```javascript
soundCloud.getUserFollowingUser(userId,followingId,function (err, followingUser) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("FollowingUser: ", JSON.parse(followingUser));
  }
});
```

#####get Followers of a particular User
```javascript
soundCloud.getUserFollowers(userId,function (err, followers) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Followers: ", JSON.parse(followers));
  }
});
```

#####get a particular Follower's details of a particular User
```javascript
soundCloud.getUserFollowerUser(userId,followerId,function (err, follower) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Follower: ", JSON.parse(follower));
  }
});
```

#####get Comments of a particular User
```javascript
soundCloud.getUserComments(userId,function (err, comments) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Comments: ", JSON.parse(comments));
  }
});
```

#####get favorite tracks of a User
```javascript
soundCloud.getUserFavorites(userId,trackId,function (err, tracks) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("FavoriteTracks: ", JSON.parse(tracks));
  }
});
```

#####get a particular FavoriteTrack of a User
```javascript
soundCloud.getUserFavoriteTrack(userId,trackId,function (err, track) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("FavoriteTrack: ", JSON.parse(track));
  }
});
```

#####get Groups of a User
```javascript
soundCloud.getUserGroups(userId,function (err, groups) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Groups: ", JSON.parse(groups));
  }
});
```

#####get WebProfiles of a User
```javascript
soundCloud.getUserWebProfiles(userId,function (err, profiles) {
  if (err) {
    console.error("Error:", err);
  }
  if (result) {
    console.log("Profiles: ", JSON.parse(profiles));
  }
});
```

##  How to test

To run tests type: `npm test`

To run tests with coverage type: `npm run coverage`