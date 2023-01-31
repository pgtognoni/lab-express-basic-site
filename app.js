const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res, next) => res.sendFile(__dirname + '/views/home.html'));

app.get('/about', (req, res, next) => res.sendFile(__dirname + '/views/about.html'))

app.get('/work', (req, res, next) => res.sendFile(__dirname + '/views/work.html'))

app.listen(port, () => console.log('App at port 3000'));
