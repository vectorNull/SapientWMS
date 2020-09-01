const express = require('express');
const router = express.Router();
const partsCtrl = require('../controllers/parts');


router.get('/new', partsCtrl.new);
router.post('/', partsCtrl.create);



module.exports = router;