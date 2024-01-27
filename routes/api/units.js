const express = require('express');
const router = express.Router();
const unitsCtrl = require('../../controllers/api/units');

router.post('/create', unitsCtrl.create)

module.exports = router;