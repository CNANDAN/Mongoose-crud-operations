var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var db = 'mongodb://localhost/example';

var books = require('./routes/books');

mongoose.connect(db, (err) => {
	if(err) throw err
		else{
			console.log("Connected successfully to db "+db);
		    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/books', books);

app.get('/', function(req, res){
    console.log('app starting on port: '+port)
    res.send('This is a simple get request');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});