const LOSTFOUND = require('../models/lost_founds.model');

exports.get_lista = (request, response, next) => {    

    const cookies = request.get('Cookie') || '';

    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    //Crear una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = request.params.id || 0;

    LOSTFOUND.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        //console.log(fieldData);

        response.render('lista', { 
            lost_founds: rows,
            ultimo_lostfound: request.session.ultimo_lostfound || '',
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });

        
    })
    .catch(error => {
        console.log(error);
    });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        isLoggedIn: request.session.isLoggedIn || false,
        descripcion: request.session.descripcion || '',
        csrfToken: request.csrfToken(), 
    });
};

exports.post_nuevo = (request, response, next) => {

    const lost_found = new LOSTFOUND({
        descripcion: request.body.descripcion,
        nombre: request.body.nombre,
        matricula: request.body.matricula,
        lugar: request.body.lugar,
        fecha: request.body.fecha,           
    });

    lost_found.save()
    .then(([rows, fieldData]) => {
        request.session.ultimo_lostfound = LOSTFOUND.descripcion;

        response.status(300).redirect('/lost_founds/lista');

    }).catch(error => console.log(error));
    
};

exports.get_pedir = (request, response, next) => {

    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>LOST & FOUND</h1>
                <form action="/lost_founds/pedir" method="POST">
                    <fieldset>
                        <legend>Escoge tu desayuno:</legend>
                        <div>
                            <input type="checkbox" id="malteada" name="malteada">
                            <label for="malteada">Malteada</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cafe" name="cafe">
                            <label for="cafe">Café</label>
                        </div>
                        <div>
                            <input type="number" id="lost_founds" name="lost_founds" value="0" min="0">
                            <label for="lost_founds"> LOST FOUNDS</label>
                        </div>
                    </fieldset>
                    <br>
                    <input type="submit" value="pedir">
                </form>
            </body>
        </html>
    `;

    response.send(html);
};

exports.post_pedir = (request, response, next) => {
    console.log(request.body);

    response.send("Buscas este " + request.body.lost_founds + " objeto perdido");
};

exports.get_pedido = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};