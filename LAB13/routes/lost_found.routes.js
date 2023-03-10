const express = require('express');
const path = require('path');

const router = express.Router();

const lost_foundController = require('../controllers/lost_found.controller');

router.get('/lista', lost_foundController.get_lista);

router.get('/nuevo', lost_foundController.get_nuevo);

router.post('/nuevo', lost_foundController.post_nuevo);

router.get('/pedir', lost_foundController.get_pedir);

router.post('/pedir', lost_foundController.post_pedir);

router.get('/pedido', lost_foundController.get_pedido);

module.exports = router;