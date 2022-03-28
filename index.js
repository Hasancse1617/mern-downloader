const express = require('express')
require('dotenv').config();
const youtubeRoute = require("./routes/YoytubeRoute");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    next();
});

app.use(express.static('public'));//Static Folder Connection
app.use(bodyParser.json());
app.use('/', youtubeRoute);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/client/build/")));
    app.get('*', (req,res)=>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const server = app.listen(PORT, ()=>{
    console.log('Your app is running on port 5000');
});

require('./socket')(server);