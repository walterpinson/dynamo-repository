var AWS = require('aws-sdk');
var prettyJson = require('prettyjson');
var dynamodb = new AWS.DynamoDB();

console.log('Listing Tables: ');

var params = {};

dynamodb.listTables(params, (error, data) => {
    if (error) console.log(error);
    if (data) console.log(prettyJson.render(data));
});