var express = require('express');
var app = express();
var mysql      = require('mysql');

var connection = mysql.createConnection({
	host     : '',
	user     : '',
	password : '',
	database : ''
});

app.get('/', function (req, res) {
	connection.query('SELECT * FROM etablissement', function(err, rows, fields) {
		if (err)
			res.status(500).send(err);

		res.status(200).send('The solution is: ', rows);
	});
});

app.listen(9520, function () {
	console.log('Example app listening on port 9520!');
});
