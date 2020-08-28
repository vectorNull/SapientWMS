const express = require('express');
const router = express.Router();
const partsCtrl = require('../controllers/parts');

router.get('/', partsCtrl.index);
router.get('/:id', partsCtrl.show);
router.get('/new', partsCtrl.new);


module.exports = router;