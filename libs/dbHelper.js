var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleDb');

mongoose.connection.on('error', function (err) {
    console.error('db error:', err.message);
});

mongoose.connection.once('open', function callback () {
    console.log("Connected to DB!");
});




