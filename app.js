const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods for now,
// In future we may want to only allow certian headers so headers below should be changed accordingly.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

// Add your endpoints here
app.get('/test', function(req, res) {
  res.status(200).send({
    response: 'API is working'
  })
})

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
