import AWS from 'aws-sdk';

const s3 = new AWS.S3();
const bucketParams: any = { Bucket: process.env.STATIC_HOST};

export async function getServiceHealth(Key: string) {
    const params = {Key, ... bucketParams};
    const file = await s3.getObject(params).promise();
    return file;
}