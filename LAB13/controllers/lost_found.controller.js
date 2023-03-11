const LOSTFOUND = require('../models/lost_found.model');

exports.get_lista = (request, response, next) => {
    
    //let cookies  = request.get('Cookies')||'';

    const cookies  = request.get('Cookies') || '';

    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas);

    response.render('lista',
    {
        lost_found: LOSTFOUND.fetchAll(),
        ultimo_lostfound: request.session.descripcion || '',
    });

    response.render('lista', { lost_found: LOSTFOUND.fetchAll() });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const lost_found = new LOSTFOUND({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
    });

    lost_found.save();

    request.session.ultimo_lostfound=lost_found.nombre.

    response.status(300).redirect('/lost_found/lista');
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
                <form action="/lost_found/pedir" method="POST">
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
}

exports.get_pedido = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}