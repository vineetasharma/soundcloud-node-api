var request = require('request');
var Messages = require('./messages');
module.exports={
    getJsonData:function(url,cb){
        request.get(url,function(err,res,body){
            if(!err && res&& res.statusCode==200){
                cb(null,body);
            }
            else if(err){
                cb(err,null);
            }
            else{
                cb(new Error(Messages.ERROR.NOT_FOUND),null);
            }
        });
    }
};