const express = require('express');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/*', (req, res) => {
	var file = path.join(__dirname, `../client/${req.path}`);
	var index = path.join(__dirname, '../client/index.html');
	var type = mime.contentType(path.extname(req.path));
	if (type)res.type(type);
	res.sendFile(req.path !== '/' && fs.existsSync(file) ? file : index);
});

app.listen('80', () => {
	console.log('MyAwesomeToDoApp running on port 8080');
});