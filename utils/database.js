const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;

function mongoConnect(callback) {
  MongoClient.connect(
    `mongodb+srv://${username}:${pw}@cluster0.t1dlpkc.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      callback(client);
      console.log("Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = mongoConnect;
