/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import { https } from 'firebase-functions';
import express, { json } from 'express';
import cors from 'cors';
const stripe = require('stripe')('sk_test_51NRB9OSDHbD7XrX9ONkQdmQkF3iMYIiNb0yR6Kl4jWdiTkrilv2LXBKsj2jFEEsqJ');

// API comfig 
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(json());

// Api routes
app.get('/', (_request, response) => response.status(200).send('Hello, world!'));

export const api = https.onRequest(app);