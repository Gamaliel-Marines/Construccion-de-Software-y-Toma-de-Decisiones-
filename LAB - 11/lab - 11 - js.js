const express = require('express');
const app = express();
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});
app.use('/home', (request, response, next) => {
    response.send('Bienvenido a casa!'); 
});
app.use('/pedir', (request, response, next) => {
    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Hot cakes</h1>
                <form action="/pedir" method="POST">
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
                            <input type="number" id="hot_cakes" name="hot_cakes" value="0" min="0">
                            <label for="hot_cakes"> hot cakes</label>
                        </div>
                    </fieldset>
                    <br>
                    <input type="submit" value="pedir">
                </form>
            </body>
        </html>
    `;
    response.send(html);
});
app.use((request, response, next) => {
    console.log('Otro middleware!');
    //Manda la respuesta
    response.send('¡Hola mundo!'); 
});
app.listen(3000);