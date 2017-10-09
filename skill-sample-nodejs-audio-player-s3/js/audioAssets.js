'use strict';

// Replace bucket names 

var params = {
    Bucket: "alexatest99",
    MaxKeys: 1000
};

var audioData = [];

// call AWS S3
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var myResult='';

S3read(params,  myResult => {


if (myResult.Contents) {
    for (var i = 0; i < myResult.Contents.length; i++) {
        var key = myResult.Contents[i].Key;    
        audioData.push({title:"title",url:"https://s3.amazonaws.com/" + myResult.Name + "/" + myResult.Contents[i].Key});

    }
}

});

// Helper Function  =================================================================================================


function S3read(params, callback) {
    // call AWS S3
    var AWS = require('aws-sdk');
    var s3 = new AWS.S3();

    s3.listObjects(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {

            console.log("Objects are" + JSON.stringify(data));           // successful response
            callback(data);
        }
        /*
        data = {
         Contents: [
            {
           ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
           Key: "example1.jpg",
           LastModified: <Date Representation>,
           Owner: {
            DisplayName: "myname",
            ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
           },
           Size: 11,
           StorageClass: "STANDARD"
          },
            {
           ETag: "\"9c8af9a76df052144598c115ef33e511\"",
           Key: "example2.jpg",
           LastModified: <Date Representation>,
           Owner: {
            DisplayName: "myname",
            ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
           },
           Size: 713193,
           StorageClass: "STANDARD"
          }
         ],
         NextMarker: "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAyfQ=="
        }
        */


    });
}

console.log('Array formed is ' + audioData.toString())
module.exports = audioData;
