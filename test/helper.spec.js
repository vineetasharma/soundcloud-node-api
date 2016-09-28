/**
 * Created by ttnd on 28/9/16.
 */
var assert = require('assert'),
    helpers = require('./../helpers/helper');

describe('helper.js: ', function () {
    it("should not throw error with invalid url ", function () {
        assert.doesNotThrow(
            function () {
                helpers.getJsonData('adsfsdfsd',function(err,data){
                })
            },
            Error
        );
    });
});