const express = require('express');
const router = express.Router();
const unitsCtrl = require('../../controllers/api/units');

router.get('/:id', unitsCtrl.detail)
// router.get('/upcoming-rent', unitsCtrl.getUpcomingRent)
router.post('/create', unitsCtrl.create)

module.exports = router;