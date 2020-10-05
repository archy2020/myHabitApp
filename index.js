//connect express server
const express = require('express');
const path = require('path');
const port = 8000;

// connect datbase
const db = require('./config/mongoose');
const Habbit = require('./models/detail');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

//static files (frontend)
app.use(express.static('assets'));

//Router
app.use('/',require('./routes')); 

app.listen(port, function(err){
    if(err){
        console.log('error is coming on the port :',err);
    }
    console.log(`Server is running at the port ${port}`);
});


