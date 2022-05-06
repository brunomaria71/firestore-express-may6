import  functions from 'firebase-functions'
import express from 'express';

const app = express();

app.get('/gotit', (req,res) => {
    res.send('Wow I cannot believe this works!😱');
});

export const api = functions.https.onRequest(app);

// const admin = require("firebase-admin");

// const serviceAccount = require('./credentials.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

  

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
