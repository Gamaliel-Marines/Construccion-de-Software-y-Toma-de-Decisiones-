const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const csrfProtection = csrf();
app.use(csrfProtection); 

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});



const rutasUsers = require('./routes/users.routes');

app.use('/users', rutasUsers);

const lostFound = require('./routes/lost_founds.routes');

app.use('/lost_founds', isAuth, lostFound);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404);

    //Manda la respuesta
    response.send('por eso pierdes cosas'); 
});

app.listen(3000);

