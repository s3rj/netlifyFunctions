// functions/twilioHandler.js

'use strict'
const serverless = require('../node_modules/serverless-http');
const express = require('express');
const app = express();
const { urlencoded } = require('body-parser');
//const firebase = require('firebase');

//firebase connection
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
//firebase.initializeApp(config);
//var database = firebase.database();
//fb snapshot
// database.ref().on("value", function(snapshot) {

//     // Then we console.log the value of snapshot
//   console.log(snapshot.val());

//     // Then we change the html associated with the number.
//   //$("#click-value").text(snapshot.val().clickCount);

//     // Then update the clickCounter variable with data from the database.
//   var clickCounter = snapshot.val().clickCount;

//     // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
//     }, function(errorObject) {

//     // In case of error this will print the error
//   console.log("The read failed: " + errorObject.code);
// });
// //


// Set up our express web application
//const PORT = 8767;
//const app = express();
app.use(urlencoded({ extended: false }));

// Create a route to handle incoming SMS messages
app.post('/sms', (request, response) => {
  console.log(
    `Incoming message from ${request.body.From}: ${request.body.Body}`
  );
  
  //database.ref().set({
    //clickCount: request.body.Body
  //});
 
 
});

module.exports = app;
module.exports.handler = serverless(app);
