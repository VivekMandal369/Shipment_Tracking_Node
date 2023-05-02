const express = require('express');
const app = express();

const client = require('./database');

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");
  if(err){
    console.log(err);
  }
  // ...rest of your application code goes here...
  
  // Start the server
  app.listen(3000, function() {
    console.log('App listening on port 3000');
  });
});
