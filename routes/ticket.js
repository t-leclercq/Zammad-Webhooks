const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/ticket');

router.post('/recup', userCtrl.recup);

module.exports = router;