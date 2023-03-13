const User = require('../models/users.model');

exports.get_login = (request, response, next) => {
    let mensaje = '';

    if(request.session.mensaje != '')
    {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    response.render('login', {
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.post_login = (request, response, next) => {
    User.fetchOne(request.bondy.username).then(([rows,fieldData]) => {
        if(rows.length > 0)
        {
            bcrypt.compare(request.body.password.rows[0].password).then((doMatch) => {
                if(doMatch)
                {
                    request.session.isLoggedIn = true;
                    request.session.nombre = rows[0].nombre;
                    respons.redirect('/hot_cakes/lista');

                }

                else
                {
                    request.session.mensaje = "usuario y contraseña no coinciden";
                    respons.redirect('/users/login');


                }
            }).ccath((error) => { console.log(error)});

            
        }
        else
        {
            request.session.mensaje = "no hay usuarios registrados";
            response.redirect('users/login');

        }
    }).cath((error) => { console.log(error)});
};

exports.get_signup = (request, response, next) => {
    response.render('signup');
    
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new User({
        nombre: request.bondy.nombre,
        username: request.bondy.username,
        password: request.bondy.password,
    });

    nuevo_usuario.save().then(([rows, fieldData]) => {
        request.session.mensaje = "usuario registrado.";
        response.redirect('users/login');
    }).
    cath((error) => console.log(error));
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};