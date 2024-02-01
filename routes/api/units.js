const express = require('express');
const router = express.Router();
const upload = require('multer')()
const unitsCtrl = require('../../controllers/api/units');

router.get('/index', unitsCtrl.index)
router.get('/:id', unitsCtrl.detail)
router.post('/add-service-request', unitsCtrl.addServiceRequest)
router.post('/create', unitsCtrl.create)
router.post('/add-file', upload.single('file'), unitsCtrl.addFile)

module.exports = router;