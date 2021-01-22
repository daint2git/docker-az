require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Create an S3 client
const s3 = new AWS.S3({
  region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy',
  },
  endpoint: process.env.LOCALSTACK_ENDPOINT || 'http://localhost:4566',
  s3ForcePathStyle: true,
});

const uploadFile = ({ data, filename }) => {
  // try {
  //   const response = await s3.upload({
  //     Bucket: process.env.LOCALSTACK_BUCKET || 'test-awsbucket',
  //     Key: filename,
  //     Body: data,
  //   });

  //   console.log(response);

  //   return response;
  // } catch (error) {
  //   throw error;
  // }
  return new Promise(resolve => {
    s3.upload(
      {
        Bucket: 'test-awsbucket',
        Key: filename,
        Body: data,
      },
      (err, response) => {
        if (err) throw err;
        console.log(response);
        resolve(response);
      },
    );
  });
};

const testUpload = async () => {
  const filepath = path.resolve(__dirname, 'abc.txt');
  const fileStream = fs.createReadStream(filepath);
  const filename = `abc.txt`;

  try {
    const response = await uploadFile({
      filename: filename,
      data: fileStream,
    });
    // console.log('testUpload success', response);
  } catch (error) {
    console.error('testUpload error', error);
  }
};

testUpload();
