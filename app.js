const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('./routes/index'));
app.use('/mail', require('./routes/send'));

app.listen(3000, () => console.log('Server is running'));
