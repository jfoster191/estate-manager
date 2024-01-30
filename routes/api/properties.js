const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../../controllers/api/properties');

router.get('/index', propertiesCtrl.index)
router.get('/:id', propertiesCtrl.detail)
router.post('/create', propertiesCtrl.create)
router.post('/add-maintenance-request', propertiesCtrl.addMaintenanceRequest)

module.exports = router;