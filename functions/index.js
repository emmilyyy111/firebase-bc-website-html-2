const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const { getCustomers, createCustomer } = require('./src/customers')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/customers', getCustomers)
app.post('/customers', createCustomer)

exports.app = functions.https.onRequest(app)
