const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://saddamtech:19980727s@cluster0.t1dlpkc.mongodb.net/?retryWrites=true&w=majority"
)
  .then((res) => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
