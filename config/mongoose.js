//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/habit');

//acquire to connection to chk the database
const db = mongoose.connection;

//error
db.on('error', console.log.bind(console, 'error connecting to db'));

//up and running the success message
db.once('open', function(){
    console.log('successfully connected to database');
});
//okay there is a error in mongo