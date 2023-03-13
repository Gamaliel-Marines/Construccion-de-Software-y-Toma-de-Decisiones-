const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use('/home', (request, response, next) => {

    response.send('Bienvenido a casa!'); 
});


const lostFound = require('./routes/lost_founds.routes');



app.use('/lost_founds', lostFound);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404);

    //Manda la respuesta
    response.send('that is why you lost something'); 
});

app.listen(3000);