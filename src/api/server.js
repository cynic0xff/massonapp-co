const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./mysqldb');

const profileRoute = require('./routes/profile.route');
const lodgeProfileRoute = require('./routes/lodgeProfile.route');
    
    
const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/profile', profileRoute);
    app.use('/lodge-profile', lodgeProfileRoute);
    
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
});