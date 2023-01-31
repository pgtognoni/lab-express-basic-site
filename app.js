const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (req, res, next) => res.render('home'));

app.get('/about', (req, res, next) => res.render('about'))

app.get('/work', (req, res, next) => res.render('work'))

app.listen(port, () => console.log('App at port 3000'));
