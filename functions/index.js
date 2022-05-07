import functions from 'firebase-functions'
import express from 'express';
import { getAllDesserts } from './desserts.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/gotit', (req,res) => {
    res.send('Wow I cannot believe this works!😱');
});

app.get('/dessert', getAllDesserts) 

export const api = functions.https.onRequest(app);
