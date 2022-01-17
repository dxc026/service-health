var express = require("express");
var app = express();
const bucket = "pby-mock-service-health";
const keyName ="~/Documents/aws/users/spycy/spycy.csv"
const AWS = require('aws-sdk');
const S3= new AWS.S3();

//Express Server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//GET REST endpoint to get all service health information
app.get("/service-health", (req, res) =>{
    const data = new AWS.S3().getObject(
        { Bucket: bucket, Key: keyName }, 
        function(err, data) {
          if (!err) {
            const body = Buffer.from(data.Body);
            console.log(body);
          }
        }
      );
    data;
});