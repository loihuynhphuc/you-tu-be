const express = require('express');
const morgan = require('morgan')
const handlebar = require('express-handlebars');
const path = require('path');
const route = require('./routes/index');
const app = express();
const db = require('./config/db');
const port = 5000;


// use file public
app.use(express.static(path.join(__dirname,'public')));
// use morgan
app.use(morgan('combined'))
//connect db 
db.connect();
// convert form data
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// template engine
app.engine('.hbs', handlebar.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// use route
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});