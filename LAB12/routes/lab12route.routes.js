const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/flatroute', (request, response, next) => {
    response.render('index', {

    });
});



module.exports = router;