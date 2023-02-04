// Create service client module using ES6 syntax.
import AWS from "aws-sdk";

// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.

AWS.config.update({
  region: REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});
