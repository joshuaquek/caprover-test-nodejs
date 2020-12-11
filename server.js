// In the terminal, run:
// `      npm install dotenv body-parser express morgan    `   
// ...won't need to install `path` because its native in Node.

// ---- NPM Imports ----
require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

// ---- Express Server Setup ----
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// ---- To serve static files from `/public` ----
app.use('/', express.static(path.join(__dirname, 'public')));

// ---- Express Server Endpoints ----
app.get('/', (req, res) => {
  res.json({ status: 'Server is running.' } );
});

app.listen(process.env.PORT || 3334); // Create a .env to set env variables