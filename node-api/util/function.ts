// import AWS from 'aws-sdk';

// const s3 = new AWS.S3();
// const bucketParams: any = { Bucket: process.env.STATIC_HOST};

// export async function getServiceHealth(Key: string) {
//     const params = {Key, ... bucketParams};
//     const file = await s3.getObject(params).promise();
//     return file;
// }

// const bucket = "pby-mock-service-health";
// const keyName ="~/Documents/aws/users/spycy/spycy.csv"
// const AWS = require('aws-sdk');
// const S3= new AWS.S3();
exports.handler = async (event, context, callback) => {
    var transcript = await download();
    console.log(transcript);
}

async function download(){
  try {
    // Converted it to async/await syntax just to simplify.
    const data = await S3.getObject(
    {   Bucket: bucket, 
        Key: "Test.json",
        //ResponseContentType: 'application/json'
    }).promise();

    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }
  catch (err) {
    return {
      statusCode: err.statusCode || 400,
      body: err.message || JSON.stringify(err.message)
    }
  }
}

function getS3File(){
    const data = AWS.S3().getObject(
        { Bucket: this.bucket, Key: this.keyName }, 
        function(err, data) {
          if (!err) {
            const body = Buffer.from(data.Body).toString('utf8');
            console.log(body);
          }
        }
      );

      return data;
}

module.exports(getS3File);