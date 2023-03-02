const express = require('express');

const router = express.Router();

router.get('/slant', (request, response, next) => {

    let html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>Good route</h1>
            <a href = "/lab11/corner" >run a corner route</a>
        </body>
    </html>
      
    `;

    response.send(html);
});

router.get('/corner', (request, response, next) => {
    let html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>you ran a perfect route, qb threw a TD pas</h1>
        </body>
    </html>
      
    `;

    response.send(html);
});


module.exports = router;