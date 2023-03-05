const express = require('express');

const router = express.Router();

router.get('/post', (request, response, next) => {

    let html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>Nice, you scored a TD</h1>
            <a href = "/lab11a/slowgo" >run a slowgo route</a>
        </body>
    </html>
      
    `;

    response.send(html);
});

router.get('/slowgo', (request, response, next) => {
    let html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>wit the wriddy</h1>
        </body>
    </html>
      
    `;

    response.send(html);
});


module.exports = router;