console.log("CORRE");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('We have a middleware');
    next(); 
});

app.use('/home', (request, response, next) => {

    response.send('welcome home my boy'); 
});

//route
const Lab11Routes = require('./routes/lab11.routes');
app.use('/lab11', Lab11Routes);
const Lab11aRoutes = require('./routes/lab11a.routes');
app.use('/lab11a', Lab11aRoutes);



app.use((request, response, next) => {
    console.log('wrong route, db made a play');

    response.status(404);

    response.send('wrong route, qb threw an I-N-T!'); 
});

app.listen(3000);