const LOSTFOUND = require('../models/lost_founds.model');

exports.get_lista = (request, response, next) => {
    
    //let cookies  = request.get('Cookies')||'';

    const cookies  = request.get('Cookies') || '';

    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas);

    response.render('lista',
    {
        lost_founds: LOSTFOUND.fetchAll(),
        ultimo_lostfound: request.session.ultimo_lostfound || '',
    });

    response.render('lista', { lost_founds: LOSTFOUND.fetchAll() });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const lost_found = new LOSTFOUND({
        descripcion: request.body.descripcion,
        lugar: request.body.lugar,
        fecha: request.body.fecha,
        matricula: request.body.matricula,
        nombre: request.body.nombre,        
    });

    lost_found.save();

    request.session.ultimo_lostfound=lost_found.nombre.

    response.status(300).redirect('/lost_founds/lista');
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
}

exports.get_pedido = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}