const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// mLab dbuser
const dbuser = process.env.DB_USER;
// mLab dbpassword
const dbpassword = process.env.DB_PW;
// Database Name
const dbName = process.env.DB_NAME;
// Connection URL
const url = process.env.MONGODB_URI || `mongodb://${dbuser}:${dbpassword}@ds153552.mlab.com:53552/${dbName}`



// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
