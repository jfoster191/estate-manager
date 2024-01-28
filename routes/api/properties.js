const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../../controllers/api/properties');

router.get('/index', propertiesCtrl.index)
router.get('/:id', propertiesCtrl.detail)
router.post('/create', propertiesCtrl.create)

module.exports = router;