const express = require('express');
const multer = require('multer');
const app = express();
const Razorpay = require('razorpay');

// load environment config variables
require('dotenv').config();

const cors = require('cors');

// error handler
require('express-async-errors');

const { errorHandler, badJsonHandler } = require('./middlewares');

// enable cors
app.use(cors());


const razorpay = new Razorpay({
  key_id: 'rzp_test_ZL1wkQfxNIacl5',
  key_secret: 'WcApSUvwtcDKO6dFiCtLCshu',
});








// parse json body
app.use(express.json());

// handle bad json format
app.use(badJsonHandler);

// load routes
require('./loaders/routes')(app);

// load and validate env variables
require('./loaders/config');

app.use('/uploads', express.static('uploads'));



// handle 404 not found error
app.use((req, res) => res.status(404).send({
  status: false,
  message: `Sorry, requested URL ${req.method} ${req.url} not found!`,
}));

// console.log('sss');
// catch all errors
app.use(errorHandler);
// console.log('test');
module.exports = app;
