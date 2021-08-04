const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('short'));

app.use(function(req, res, next) {
    console.log('req IP: ' + req.url);
    console.log('req date: '+ new Date());
    next();
});

const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.use(function(err, req, res, next) {
    console.error(err);
    next(err);
});

app.use(function(req, res) {
    res.status(404);
    res.send('File not found!')
});

app.listen(3000, function(){
    console.log('App started on port 3000');
});