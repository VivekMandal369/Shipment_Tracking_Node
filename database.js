const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb+srv://vivek:ojaSYRO9uMeFIF58@cluster0.w4ocdev.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'ShipmentTracking';

// Array of collection names to create
const trackingDetails = require('./db_tables_schema/tracking_details');
const dynamicInfo = require('./db_tables_schema/dynamic_info');
const collectionsToCreate = [trackingDetails, dynamicInfo];

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Loop over the array of collection names and create each collection only if it doesn't exist
  collectionsToCreate.forEach(function(collectionName) {
    db.createCollection(collectionName, { strict: false }, function(err, res) {
      if (err) {
        console.log(err);
        console.log(`The ${collectionName} collection already exists`);
      } else {
        console.log(`The ${collectionName} collection created!`);
      }
      if (collectionsToCreate.indexOf(collectionName) === collectionsToCreate.length - 1) {
        // Close the connection to the MongoDB server once all collections have been created
        client.close();
      }
    });
  });
});

module.exports = client;