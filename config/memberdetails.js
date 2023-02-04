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

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_MEMBERS = "crud-api-members";
// this function is for adding/updating an entry/member in the table
// make sure you add the item being added and the table name in the params const
const addMember = async (member) => {
  const params = {
    TableName: TABLE_MEMBERS,
    Item: member,
  };
  return await dynamoClient.put(params).promise();
};
const getMemberById = async (id) => {
  const params = {
    TableName: TABLE_MEMBERS,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};
// this function is retrieving all entries in the table
const getMembers = async () => {
  const params = {
    TableName: TABLE_MEMBERS,
  };
  const members = await dynamoClient.scan(params).promise();
  return members;
};

// this function is deleting a table entry by its id.
// make sure you include the id key in the params const
const deleteMember = async (id) => {
  const myMemberId = +id;
  const params = {
    TableName: TABLE_MEMBERS,
    Key: {
      id: myMemberId,
    },
  };
  return await dynamoClient.delete(params).promise();
};
export { addMember, getMemberById, deleteMember, getMembers };
