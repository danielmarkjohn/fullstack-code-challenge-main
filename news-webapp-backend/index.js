// ./src/index.js


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const news = require('./routes/news');

const port = 3001;


// defining the Express app
const app = express();


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());


app.use('/news',news);

// starting the server
const listener = app.listen(port, () => {
  console.log("App listening on port :  " + listener.address().port)
})

module.exports = app;