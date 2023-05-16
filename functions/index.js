const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JRMz9JvlRLkPWsg3kaS4nECw4ImNQUTYGpJ1yGcjViKztcjHJ1OdOqmhUAzAITf2RX852YAXh5NROl9sPuf72vl007VbZnC7o');

// API

// - configuranción de la App
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - routes de la API
app.get('/', (requets, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Requst Recieved, for this amount >>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunidades de la moneda
        currency: "usd",
    });

    // OK - creado
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app) 

// Ejemplo de endpoint
// http://localhost:5001/clone-7c49e/us-central1/api
