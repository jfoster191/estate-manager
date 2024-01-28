const express = require('express');
const router = express.Router();
const unitsCtrl = require('../../controllers/api/units');

router.get('/:id', unitsCtrl.detail)
router.post('/create', unitsCtrl.create)

module.exports = router;