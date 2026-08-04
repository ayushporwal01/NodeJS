const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

//Connection
const url =
  "mongodb+srv://porwalayush953_db_user:GRnXJ8JIJbqfjgCx@namastenodejs.nnvpyuv.mongodb.net/?appName=NamasteNodeJS";
const client = new MongoClient(url);

//Database Name
const dbName = "HelloWorld";

async function main() {
  //connect to the server
  await client.connect();
  console.log("Connected successfully to the server");

  //select db and collection
  const db = client.db(dbName);
  const collection = db.collection("User");

  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done";
}

//Handles promise
main()
  .then(console.log) //prints "done"
  .catch(console.error) //catches error
  .finally(() => client.close()); //closes the connecton
