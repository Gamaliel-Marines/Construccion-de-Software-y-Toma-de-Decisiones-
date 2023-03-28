const express = require('express');
const path = require('path');
const hasCreate = require('../util/has-create');

const router = express.Router();

const lost_foundController = require('../controllers/lost_founds.controller');

router.get('/buscar/:valor_busqueda', lost_foundController.get_buscar)

router.get('/lista', lost_foundController.get_lista);

router.get('/nuevo', hasCreate, lost_foundController.get_nuevo);

router.post('/nuevo', hasCreate, lost_foundController.post_nuevo);

router.get('/pedir', lost_foundController.get_pedir);

router.post('/pedir', lost_foundController.post_pedir);

router.get('/pedido', lost_foundController.get_pedido);

module.exports = router;