const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

//Connection
const url = "mongodb://localhost:27017";
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

  
  // the following code examples can be pasted here...

  return "done";
}

//Handles promise
main()
  .then(console.log) //prints "done"
  .catch(console.error) //catches error
  .finally(() => client.close()); //closes the connecton
