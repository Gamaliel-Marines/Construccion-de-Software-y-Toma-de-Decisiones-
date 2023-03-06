console.log("CORRE");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
    next(); 
});

const Lab12Routes = require('./routes/lab12route.routes');
app.use('/lab12route',Lab12Routes);

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404 - Page not found</h1>');
});

app.listen(3000);